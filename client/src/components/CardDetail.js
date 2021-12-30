import React from "react";
import { Link } from "react-router-dom";
export default function CardDetail({ title, image, parragraph, proyectType, id }) {
  return (
    <div className="cardProyect">
      			<Link to = {`/proyectos/${id}`}> 
            <h2 className="titCardGreen">{title}</h2>
            </Link>
      <img className="imgCard" src={image} alt="img not found" />
      <p className="parrCard">{proyectType}</p>
      <p className="parrCard">{parragraph}</p>
    </div>
  );
}
