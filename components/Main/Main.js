import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import PillList from "../UI/PillsList";
import LastUpdate from "../UI/LastUpdate";
import Pagination from "../UI/Pagination";
import Loading from "../UI/Loading";
import pillStore from "../../context/PillStore";
import useMediaQuery from "../../hooks/useMediaQuery";

const Main = ({ resultsPills }) => {
  const activePage = pillStore((s) => s.activePage);
  const fnSetActivePage = pillStore((s) => s.setActivePage);
  const totalPages = pillStore((s) => s.totalPages);

  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, [activePage]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const pagesToShow = isMobile ? 2 : 10;

  return (
    <main>
      <Container className="p-3">
        {resultsPills.isError && (
          <div>Error trayendo los datos: {resultsPills.error}</div>
        )}
        {(resultsPills.isLoading || resultsPills.isFetching) && <Loading />}
        {resultsPills.isSuccess && resultsPills.isFetched && (
          <>
            <LastUpdate />
            <PillList data={resultsPills.data.data.data} />
            <Pagination
              activePage={activePage}
              setActivePage={fnSetActivePage}
              pages={totalPages}
              visiblePages={pagesToShow}
            />
          </>
        )}
      </Container>
    </main>
  );
};

Main.propTypes = {
  resultsPills: PropTypes.any,
};

export default Main;
