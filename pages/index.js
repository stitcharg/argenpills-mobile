import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../components/Main/Main';
import Footer from '../components/UI/Footer';
import ReactGA from 'react-ga';
import Header from '../components/Header/Header';
import { useQuery } from 'react-query';
import fetchPills from '../components/API/fetchPills';
import { useState } from 'react';

function App({ resultsPills }) {
  const [searchText, setSearchText] = useState("");

  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-221362845-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  const doSearch = (search) => {
    if (search != "") {
      setSearchText(search);
    } else {
      setSearchText('');
    }
  }

  const queryResults = (useQuery(['pills', searchText], fetchPills,
    { staleTime: 60000, refetchOnWindowFocus: false },
    { initialData: resultsPills }));

  return (
    <div className="wrapper">
      <Header handleSearch={doSearch} />
      <Main resultsPills={queryResults} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data: resultsPills } = await fetchPills("");

  return {
    props: {
      resultsPills
    }
  }
}

export default App;
