import React from "react";
import CardAdmin from "./CardAdmin.js";

export default function Rendering({ pageProjects }) { 

    return (

        <ul>

            {

                    pageProjects.map((project) => (
                    
                                <li key={project.id} >

                                    <CardAdmin 
                                    title={project.title}
                                    image={project.image}
                                    parragraph={project.parragraph}
                                    proyectType={project.proyectType}
                                    id={project.id}
                                    file={project.file}
                                    />
                                        
                                </li>
                    )
                
                )
            }

        </ul>
    )

};