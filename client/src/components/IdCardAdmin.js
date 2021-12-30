import React, 
{ 
 useEffect 
  
} from "react";

import { 
        useDispatch, 
        useSelector
} from "react-redux"; 

import {

projectById,
clearProjectById

} from '../Redux/actions/actions.js';
import CardDetailAdmin from "./CardDetailAdmin.js";


export default function IdCardAdmin({ props }) {
    const dispatch = useDispatch (); 
    const project = useSelector (state => state.projectById); 
    
    useEffect (() => {        
        dispatch(projectById(props)); 
        return() => { 
            dispatch(clearProjectById());
        };
    }, [dispatch]);
    
    return (

        <div>

            {
                                            
                    <CardDetailAdmin 
                        title = {project?.title}
                        image = {project?.image}
                        parragraph = {project?.parragraph}
                        proyectType = {project?.proyectType}
                        id = {project?.id}
                    />                
                
            }
            
        </div>
    )

};

