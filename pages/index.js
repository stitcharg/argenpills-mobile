import React, { useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../components/Main/Main';
import Footer from '../components/UI/Footer';
import Header from '../components/Header/Header';
import { useQuery } from 'react-query';
import fetchPills from '../components/API/fetchPills';
import { useState } from 'react';
import pillStore from '../context/PillStore';
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  const [searchText, setSearchText] = useState("");

  const pillsPerPage = pillStore(s => s.pillsPerPage);
  const lastEvaluatedKey = pillStore(s => s.lastEvaluatedKey);
  const currentPage = pillStore(s => s.activePage);

  const fnSetLastEvaluatedKey = pillStore(s => s.setLastEvaluatedKey);
  const fnSetLastUpdate = pillStore(s => s.setLastUpdate);
  const fnSetTotalPages = pillStore(s => s.setTotalPages);
  const fnSetFilter = pillStore(s => s.setFilter);

  const getTotalPages = useCallback((headersData) => {
    const totalRecords = parseInt(headersData["x-total-count"] ?? 0);
    const calculatedPages = Math.ceil(totalRecords / pillsPerPage);
    return calculatedPages;
  }, [pillsPerPage]);

  const doSearch = (search) => {
    if (search != "") {
      fnSetFilter(search);
      setSearchText(search);
    } else {
      fnSetFilter('');
      setSearchText('');
    }
  }

  const queryResults = useQuery(
    ['pills', searchText, currentPage],
    (queryKey) => fetchPills(queryKey, currentPage, searchText, lastEvaluatedKey),
    {
      staleTime: 60000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      onSuccess: (response) => {
        const items = response.data.data;

        if (items.length > 0) {
          const lastEvaluate = response.data.LastEvaluatedKey;
          const calculatedPages = getTotalPages(response.headers);
          fnSetTotalPages(calculatedPages);
          fnSetLastEvaluatedKey(lastEvaluate);

          if (currentPage == 1) {
            const firstItem = items[0];
            if (firstItem) fnSetLastUpdate(firstItem.posted_date);
          }
        } else {
          fnSetTotalPages(0);
          fnSetLastEvaluatedKey("");
        }
      }
    },
  );

  useEffect(() => {
    if (queryResults.data && !queryResults.isFetching) {
      const calculatedPages = getTotalPages(queryResults.data.headers);
      fnSetTotalPages(calculatedPages);
    }
  }, [queryResults.data, queryResults.isFetching, fnSetTotalPages, getTotalPages]);

  return (
    <div className="wrapper">
      <Header handleSearch={doSearch} />
      <Main resultsPills={queryResults} />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export async function getServerSideProps() {
  const isUpgradingEnabled = process.env.NEXT_PUBLIC_ENABLE_UPGRADING_PAGE === 'true';

  if (isUpgradingEnabled) {
    return {
      redirect: {
        destination: '/upgrade',
        permanent: false, // set to true if this is a permanent redirect
      },
    };
  }

  // Return normal props for home page
  return { props: {} };
}


export default App;
