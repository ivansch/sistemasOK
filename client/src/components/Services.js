import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";

import Footer from "./Footer.js";

export default function Services() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="divServicios">
      <h2 className="title2">SERVICIOS</h2>
      <hr className="linet" />
     
          <div className="divFlex">
            <div className="cardServ">
              <img className="imgCardServ" src="images/regado.jpeg" alt="" />
              <div className="boxCardServ">
                <h4 className="titCardBlue">Instalacion</h4>
                <p className="parrCard">
                Instalamos equipos de riego por goteo superficial y enterrado.
                </p>
                <Button className="btnCardServ bnBlue" onClick={handleShow}>
                  <p className="pBtnCardProjects vrBlue">Ver más</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
                
              </div>
            </div>
            <div className="cardServ">
              <img className="imgCardServ" src="images/auditor2.jpeg" alt="" />
              <div className="boxCardServ">
                <h4 className="titCardBlue">Auditorías</h4>
                <p className="parrCard">
                Auditorías sobre equipos de riego en funcionamiento, diagnóstico y rediseño.
                </p>
                <Button className="btnCardServ bnBlue" onClick={handleShow}>
                  <p className="pBtnCardProjects vrBlue">Ver más</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>
            <div className="cardServ">
              <img className="imgCardServ" src="images/maiz.jpg" alt="" />
              <div className="boxCardServ">
                <h4 className="titCardBlue">Diagnóstico</h4>
                <p className="parrCard">
                Diagnóstico técnico y potencialidades productivas para toma de decisión frente a la compra
de capital Tierra.
                </p>
                <Button className="btnCardServ bnBlue" onClick={handleShow}>
                  <p className="pBtnCardProjects vrBlue">Ver más</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>
            <div className="cardServ">
              <img className="imgCardServ" src="images/maiz.jpg" alt="" />
              <div className="boxCardServ">
                <h4 className="titCardBlue">Servicio de siembra </h4>
                <p className="parrCard">
                Servicio de siembra directa de zapallo, maíz dulce, leguminosas, entre otras.
                </p>
                <Button className="btnCardServ bnBlue" onClick={handleShow}>
                  <p className="pBtnCardProjects vrBlue">Ver más</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
                </Button>
              </div>
            </div>
          </div>
       
         
       
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bomba de riego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="//www.slideshare.net/slideshow/embed_code/key/78NW2yxg5UZMM3"
            className="ifr"
            title="This is a unique title"
          />
        </Modal.Body>
      </Modal>

      <div>
        <Footer />
      </div>
    </div>
  );
}
