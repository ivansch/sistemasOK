import React from "react";
import { Pagin } from "react-bootstrap";

export default function Pagination({ numberOfProjects, numberOfPage, amountOfProjects }) {

  const amountOfPage = [];

  for (let i = 1; i <= Math.ceil(numberOfProjects / amountOfProjects); i++) {
  amountOfPage.push(i); 
  };

  return (
    <nav className="navPag">

      <div>
            {

                amountOfPage.map((page) => (
                    <button
                    className='btnPag'
                    key={page}
                    onClick={() => {
                    numberOfPage(page)}} >
                        {`${page}`} 
                        
                    </button>

                ))

            }

      </div>

    </nav>
  );
};
