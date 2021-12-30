import axios from 'axios';

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
}  from './actionTypes';

import { 
  LOCALHOST 
} from '../../constants';

export function projectByTitle(payload) {
  return async function(dispatch) {
     await axios.get(`${LOCALHOST}/proyect?title=${payload}`)
     .then((response) => {
       dispatch({
         type: GET_PROJECT_BY_TITLE,
         payload: response.data
       })
     })
     .catch ((error) => console.log (error));
  }
};

export function getAllProjects(){
  return async function(dispatch) {
    await axios.get(`${LOCALHOST}/proyect`)
    .then((response) => {
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: response.data
      })
    })
  }
};

export function addProject(payload) {
  return async function(dispatch) {
    await axios.post(`${LOCALHOST}/proyect`, payload)
    .then((response) => {
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      })
    })
  }
};

export function login(payload) {
  return async function(dispatch) {
    await axios.get(`${LOCALHOST}/admin`, payload) 
    .then((response) => {
      dispatch({
        type: LOGIN,
        payload: response.data
      })
    })
  }
};

export function sendMail(payload) {
  return async function(dispatch) {
    await axios.post(`${LOCALHOST}/sendmail`, payload)
    .then((response) => {
      dispatch({
        type: SEND_MAIL,
        payload: response.data
      })
    })
  }
}

export function projectById(payload) {
  return async function(dispatch) {
    await axios.get(`${LOCALHOST}/proyect/byId?id=${payload}`)
    .then((response) => {
      dispatch({
        type: PROJECT_BY_ID,
        payload: response.data
      })
    })
  }
}

export function clearProjectById () {
  return {
    
          type: CLEAR_PROJECT_BY_ID,
          payload: []

  }
};

export function deleteProject(payload) {
return async function(dispatch) {
  await axios.delete(`${LOCALHOST}/proyect?id=${payload}`)
  .then((response) => {
    dispatch({
      type: DELETE_PROJECT
    })
  })
}  
}

export function updateProject(payload) {
  console.log('soy el payload de updateProject: ', payload)
  return async function(dispatch){
    await axios.put(`${LOCALHOST}/proyect`, payload)
    .then((response) => {
      console.log('soy el response de updateProject: ', response)
      dispatch({
        type: UPDATE_PROJECT,
        payload: response.data
      })
    })
  }
}
