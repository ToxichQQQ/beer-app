import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBeers } from "../../service";
import { Loader } from "../../components/Loader/Loader";
import { Table } from "../../components/Table/Table";
import style from "./AllBerrPage.module.css";
import { Pagination } from "../../components/Pagination/Pagination";

export const AllBeerPage = () => {
  let navigate = useNavigate();
  const page = localStorage.getItem("page");

  const [activePage, setActivePage] = useState(
    page ? Number.parseInt(page) : 1
  );
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChangePage = (page) => {
    setActivePage(page);
  };

  const handleClickBeer = (id) => {
    navigate(`/beer/${id}`);
  };

  useEffect(() => {
    (async function () {
      setLoading(true);
      const data = await getAllBeers(activePage);

      setBeers(data);
      setLoading(false);
      localStorage.setItem("page", JSON.stringify(activePage));
    })();
  }, [activePage]);

  const filterBeers = useMemo(() => {
    if (!filter) return beers;
    return beers.filter((item) =>
      item.name.toUpperCase().includes(filter.toUpperCase())
    );
  }, [filter, beers]);

  if (loading)
    return (
      <div className={style.container}>
        <Loader />
      </div>
    );

  return (
    <div className={style.container}>
      <h1 className={style.header}>Beer Library</h1>
      <input
        className={style.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table data={filterBeers} handleClickBeer={handleClickBeer} />
      <Pagination
        active={activePage}
        onChange={handleChangePage}
        isLastPage={!beers.length}
      />
    </div>
  );
};
