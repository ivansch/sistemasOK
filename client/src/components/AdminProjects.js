import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import {
  useSelector,
  useDispatch,
} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { projectByTitle, getAllProjects } from "../Redux/actions/actions.js";

import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Rendering from "./Rendering.js";
import Pagination from './Pagination.js'

export default function AdminProjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    return () => {
      dispatch(getAllProjects());
    }
  }, [dispatch]);

  const allProjects = useSelector((state) => state.allProjects);

  const [input, setInput] = useState("");

  // ¡¡¡¡¡¡¡ PAGINADO, ORDEN Y FILTROS !!!!!!!!

  const [amountOfProjects] = useState(12);

  const [paged, setPaged] = useState(1);
  const [order, setOrder] = useState("");
  const [typeOrder, setTypeOrder] = useState("");
  const [filter, setFilter] = useState("");

  const numberOfPage = (number) => {
    setPaged(number);
  }

  const lastIndex = paged * amountOfProjects;

  const firstIndex = lastIndex - amountOfProjects;

  const pageProjects = allProjects?.slice(firstIndex, lastIndex)

  const handlerOnChange = (e) => {
    setInput(e.target.value);
  };

  const handlerFilter = (e) => {
    dispatch(getAllProjects())
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    dispatch(projectByTitle(input));
  };



  return (
    <div>
      <div className="boxSearch">
        <div className="divFlexs">
          <p className="parrForm">Añadir proyecto</p>
          <Link to="/crearproyecto">
            <button className="btnplus">
              +
            </button>
          </Link>
        </div>

        <div>
          <button className="btnClean"
            onClick={handlerFilter}>
            Limpiar filtros
          </button>
        </div>

        <form onSubmit={handlerOnSubmit}>
          <div className="divFlexs">
            <input
              className="inputSearch"
              type="text"
              placeholder="Proyecto..."
              value={input}
              onChange={handlerOnChange}
            />

            <button type="submit" className="btnSearch">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="wrapper">
            {allProjects.length === 0 ? (
              <div>
                <Spinner
                  animation="border"
                  className="spinner"
                  variant="success"
                />
              </div>
            ) : (
              <div>
                <div className="columnDiv">
                  <Rendering pageProjects={pageProjects} />
                </div>
                <div>
                  <Pagination
                    amountOfProjects={amountOfProjects}
                    numberOfProjects={allProjects.length}
                    numberOfPage={numberOfPage}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
