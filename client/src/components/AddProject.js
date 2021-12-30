import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addProject } from "../Redux/actions/actions.js";
import Footer from "./Footer.js";
import { useHistory } from "react-router-dom";

export default function AddProject() {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState("");

  const [error, setError] = useState({})

  const [form, setForm] = useState({
    title: "",
    image: "",
    parragraph: "",
    proyectType: "",
    file: ""
  });

  function validate(form) {
    let error = {};
    if (!form.title) {
      error.title = "Se requiere un Titulo"
    } 
    else if (!form.image) {
      error.image = 'Se requiere una Imagen'
    } 
    else if (!form.parragraph) {
      error.parragraph = 'Se requiere un Parrafo'
    } 
    else if (!form.proyectType) {
      error.proyectType = 'Se requiere un Tipo de Proyecto'
    } 
    else if (!form.file) {
      error.file = 'Se requiere un PDF'
    }
    return error
  }


  function handlerOnChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  function handlerSelectSeller(e) {
    setForm({
      ...form,
      proyectType: e.target.value,
    });
  }

  // cloudinary
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "gzbrg5ii");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbrbrcx3r/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const resp = await res.json();
    setImage(resp.secure_url);
  };

  const uploadFile = async (e) => {
    const archive = e.target.files;
    const data = new FormData();
    data.append("file", archive[0]); // probar con 1
    data.append("upload_preset", "gzbrg5ii");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbrbrcx3r/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const response = await res.json();
    setUpload(response.secure_url);
  };

  function handlerOnSubmit(e) {
    e.preventDefault();
    image ? form.image = image : console.log('estoy vacia')
    console.log('soy el upload en el handlerOnSubmit: ', upload)
    upload ? form.file = upload : console.log('estoy vacio')
    dispatch(addProject(form));
    setForm({
      title: "",
      image: "",
      parragraph: "",
      proyectType: "",
      file: ""
    })
    setImage("");
    setLoading("")
    setUpload("")
    window.location.reload()
    navigate('/admin')
  }

  return (
    <div>
      <div className="divCenter">
        <h2 className="titCardGreenS">Crear Proyecto</h2>
        <form className="formInit" onSubmit={handlerOnSubmit}>
          <div>

            <div>
            <label>Titulo</label>
            <input
              className="inputForm"
              type="text"
              name="title"
              placeholder="Titulo..."
              value={form.title}
              required="required"
              onChange={handlerOnChange}
            />
            <div>
              {error.title ? error.title : (<p></p>)}
            </div>
            </div>

            <div>
            <label>Parrafo</label>
            <input
              className="inputForm"
              type="text"
              name="parragraph"
              placeholder="Parrafo..."
              value={form.parragraph}
              onChange={handlerOnChange}
            />
            <div>
              {error.parragraph ? error.parragraph : (<p></p>)}
            </div>       
            </div>

            <div>
              <div>
                <label>Tipo de proyecto</label>
              </div>
              <div>
                <select
                  name="proyectType"
                  value={form.proyectType}
                  onChange={handlerSelectSeller}
                >
                  <option value="" disabled="disabled">
                    Seleccionar
                  </option>
                  <option value="productivo integral">
                    Productivo integral
                  </option>
                  <option value="sistema de riego">Sistema de riego </option>
                </select>
                <div>
                  {error.proyectType ? error.proyectType : (<p></p>) }
                </div>
              </div>
            </div>

            <div >
              <div >
                <label>Subir imagen</label>
              </div>
              <div >
                <input
                
                  onChange={uploadImage}
                  type="file"
                  name="image"
                  required="required"
                  accept="image/png,image/jpeg"
                />
                <div>
                  {error.image ? error.image : (<p></p>) }
                </div>

              </div>
              <div>
                {loading ? (
                  <img src={image} alt="No hay imagen" />
                ) : (
                  <p>Aun no has subido una imagen</p>
                )}
              </div>
            </div>

            <div >
              <div >
                <label>Subir PDF</label>
              </div>
              <div >
                <input
                
                  onChange={uploadFile}
                  type="file"
                  name="file"
                  required="required"
                />
                <div>
                  {error.file ? error.file : (<p></p>) }
                </div>

              </div>
            </div>
        </div>

          <button type="submit" className="btnS">
            Añadir
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
