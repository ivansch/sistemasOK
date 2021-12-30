import React, { useState } from "react";

import {
  useDispatch, 
} from "react-redux";

import { useHistory } from "react-router-dom";

import { login } from "../Redux/actions/actions.js";

export default function Login() {
  const dispatch = useDispatch(); 
  const history = useHistory();

  const [input, setInput] = useState({
    mail: "",
    password: "",
  });

  const [error, setError] = useState({})

  
  function validate(input) {
    let error = {};
    if (!input.mail) {
      error.mail = "Se requiere un Mail"
    } 
    else if (!input.password) {
      error.password = 'Se requiere una Contraseña'
    }
    return error
  }


  const handlerOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handlerOnSubmit = (e) => {
    dispatch(login(input));
    history.push("/admin");
  };
  return (
    <div>
      <form onSubmit={handlerOnSubmit} className="formInit">
        <h2 className="titCardBlue">Inicia sesión</h2>

        <div>
        <input
          className="inputForm"
          type="email"
          name="mail"
          placeholder="Mail"
          onChange={handlerOnChange}
          value={input.mail}
        />
        <div>
          {error.mail ? error.mail : (<p></p>)}
        </div>

        </div>
        
        <div>
        <input
          className="inputForm"
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handlerOnChange}
          value={input.password}
        />
                <div>
          {error.password ? error.password : (<p></p>)}
        </div>

        </div>
        <button className="btnS" type="submit">
          Iniciar
        </button>
      </form>
    </div>
  );
}
