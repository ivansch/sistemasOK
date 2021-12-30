import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";
import { Spinner } from "react-bootstrap";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Pagination from './Pagination.js'

export default function RegationsProjects() {
  const dispatch = useDispatch();

  const allProjects = useSelector((state) => state.allProjects);


  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const filterProjects = allProjects?.filter((project) => project.proyectType === "sistema de riego")

      // ¡¡¡¡¡¡¡ PAGINADO, ORDEN Y FILTROS !!!!!!!!

      const [amountOfProjects] =  useState(12);

      const [paged, setPaged] = useState(1); 
      const [order, setOrder] = useState("");
      const [typeOrder, setTypeOrder] = useState("");
      const [filter, setFilter] = useState("");
  
      const numberOfPage = (number) => {
          setPaged(number); 
      }
  
      const lastIndex = paged * amountOfProjects;
  
      const firstIndex = lastIndex - amountOfProjects;  
  
      const pageProjects = filterProjects?.slice(firstIndex, lastIndex)

  return (
    <div className="divTop">
      <h2 className="title2">RIEGO POR GOTEO</h2>
      <hr className="linet" />
      <div className="wrapper">
        {filterProjects?.length === 0 ? (
           <div>
           <Spinner
             animation="border"
             className="spinner"
             variant="success"
           />
         </div>
        ) : (
          <div className="columnDiv">
            {filterProjects?.map((project) => {
              return (
                <div key={project.id}>
                  <Card
                    title={project.title}
                    image={project.image}
                    parragraph={project.parragraph}
                    proyectType={project.proyectType}
                    id = {project.id}
                    file={project.file}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
                        <Pagination
                    amountOfProjects={amountOfProjects}
                    numberOfProjects={filterProjects.length}
                    numberOfPage={numberOfPage}
                  />
</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
