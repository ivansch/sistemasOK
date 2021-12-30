import {
    GET_PROJECT_BY_TITLE,
    GET_ALL_PROJECTS,
    ADD_PROJECT,
    LOGIN,
    SEND_MAIL,
    PROJECT_BY_ID,
    CLEAR_PROJECT_BY_ID,
    DELETE_PROJECT,
    UPDATE_PROJECT,

}  from '../actions/actionTypes.js';

const inicialState = {
    
    projectByTitle: [],
    allProjects: [],
    newProject: [],
    login: [],
    mail: [],
    projectById: [],
    projectUpdated: [],
}

export default function reducer (state = inicialState, { type, payload }) {  
    switch (type) { 

        case GET_PROJECT_BY_TITLE:
            return {
                ...state,
                projectByTitle: payload,
                allProjects: payload
            };
        
        case GET_ALL_PROJECTS:
            return {
                ...state,
                allProjects: payload
            };
        
        case ADD_PROJECT:
            return {
                ...state,
                newProject: payload
            };
        
        case LOGIN:
            return {
                ...state,
                login: payload
            };
        
        case SEND_MAIL:
            return {
                ...state,
                mail: payload
            };

        case PROJECT_BY_ID:
            return {
                ...state,
                projectById: payload
            };

        case CLEAR_PROJECT_BY_ID:
            return {
                ...state,
                projectById: payload
            };

        case DELETE_PROJECT:
            return {
                ...state
            };

        case UPDATE_PROJECT:
            return {
                ...state,
                projectUpdated: payload
            };

        default: {

            return state;

        }

    }

};
