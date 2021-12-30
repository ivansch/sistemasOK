import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";

import Footer from "./Footer.js";

export default function ShowProjects() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllProjects());
    return () =>  {
      dispatch(getAllProjects())};
  }, [dispatch]);

  return (
    <div>
      <section id="proyectos">
        <h2 class="title2">PROYECTOS</h2>
        <hr class="linet" />
        <article class="card cardPrcBlue">
          <img class="imgCard" src="images/maiz.jpg" alt="" />
          <div class="boxCard">
            <h4 class="titCardBlue">PRODUCTIVOS INTEGRALES</h4>
            <p class="parrCard">
              Análisis macro técnico y productivo previo a la siembra. Incluye tanto la planificación del
riego del cultivo como la viabilidad productiva y económica del sembrado.
            </p>
            <button type="button" name="button" class="btnCard bnBlue">
              <a href="/productivosintegrales">
               <div className="divFlex">
                  <p className="pBtnCardProjects vrBlue">VER MÁS</p>
                  <img className="imgNext" src="images/nextBlue.png" alt="" />
             </div >
              </a>
              
            </button>
          </div>
        </article>
        <article class="card cardPrc">
          <div class="boxCard">
            <h4 class="titCardGreen">RIEGO POR GOTEO</h4>
            <p class="parrCard">
            Planeamiento y diseño de sistemas de riego para cultivos de distintas características.
Consultá nuestras propuestas para la siembra de cebolla, maíz, manzano, olivos, almendros
y otras hortícolas.
            </p>
            <button type="button" name="button" class="btnCard bnGreen">
            <a href="/sistemasderiego">
                <div className="divFlex">
                  <p className="pBtnCardProjects vrGreen">VER MÁS</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
             </div >
              </a>
            </button>
          </div>
          <img class="imgCard" src="images/maiz.jpg" alt="" />
        </article>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}






