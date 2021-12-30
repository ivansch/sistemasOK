import './App.css';
import React from "react";

import { Route } from "react-router";

import Login from './components/Login.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import AdminProjets from './components/AdminProjects';
import AddProject from './components/AddProject.js'
import Services from './components/Services.js'
import Products from './components/Products.js'
import ShowProjects from './components/ShowProjects.js'
import IntegralsProjects from  './components/IntegralsProjects.js'
import RegationsProjects from  './components/RegationsProjects.js'
import Us from './components/Us.js'
import IdCard from './components/IdCard.js';
import IdCardAdmin from './components/IdCardAdmin.js';


export default function App () {

  return (

    <div>

      <Route 
        path = '/'
        component = {NavBar} /> 

      <Route
        exact path = '/'  
        component = {Home} /> 
        
      <Route 
        exact path = '/home'    
        component = {Home} />

      <Route 
        exact path = '/servicios'    
        component = {Services} />

      <Route 
        exact path = '/productos'    
        component = {Products} />

      <Route 
        exact path = '/proyectos'    
        component = {ShowProjects} />

      <Route 
        exact path = '/iniciarsesion'    
        component = {Login} />

        <Route 
        exact path = '/admin'
        component = {AdminProjets} />

        <Route 
        path='/crearproyecto'
        component={AddProject} />

        <Route 
        path='/sistemasderiego'
        component={RegationsProjects} />

        <Route 
        path='/productivosintegrales'
        component={IntegralsProjects} />
        
        <Route 
        path='/nosotros'
        component={Us} />

        <Route 
        path = '/admin/:id'
        render = {({ match }) => <IdCardAdmin props = {match.params.id} />} /> 

        <Route 
        path = '/proyectos/:id'
        render = {({ match }) => <IdCard props = {match.params.id} />} />  


    </div>

  );

};
