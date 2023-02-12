import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../components/Main/Main';
import Footer from '../components/UI/Footer';
import Header from '../components/Header/Header';
import { useQuery } from 'react-query';
import fetchPills from '../components/API/fetchPills';
import { useState } from 'react';
import pillStore from '../context/PillStore';

function App() {
  const [searchText, setSearchText] = useState("");
  const fnSetTotalPages = pillStore(s => s.setTotalPages)
  const pillsPerPage = pillStore(s => s.pillsPerPage)

  const doSearch = (search) => {
    if (search != "") {
      setSearchText(search);
    } else {
      setSearchText('');
    }
  }

  const queryResults = (
    useQuery(['pills', searchText],
      fetchPills,
      {
        staleTime: 60000,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: (response) => {
          if (response.data) {
            const totalRecords = response.data.length;

            const calculatedPages = Math.ceil(totalRecords / pillsPerPage);

            fnSetTotalPages(calculatedPages);
          }
        }
      },
    )
  );

  return (
    <div className="wrapper">
      <Header handleSearch={doSearch} />
      <Main resultsPills={queryResults} />
      <Footer />
    </div>
  );
}

export default App;
