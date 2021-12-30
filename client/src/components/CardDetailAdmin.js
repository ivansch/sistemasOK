import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProject } from "../Redux/actions/actions.js";
import { useHistory } from "react-router-dom";
export default function CardDetailAdmin({ title, image, parragraph, proyectType, id }) {

  const dispatch = useDispatch();
  const navigate = useHistory();

  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState("");

  const [error, setError] = useState({})

  const [form, setForm] = useState({
    id: "",
    title: "",
    image: "",
    parragraph: "",
    proyectType: "",
    file: ""
  })

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
      setPicture(resp.secure_url);
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
    picture ? form.image = picture : console.log('soy la image en el handerOnSubmit, estoy vacia')
    upload ? form.file = upload : console.log('soy el upload en el handlerOnSubmit, estoy vacio')
    console.log('soy el id en el handlerOnSubmit: ', id)
    id ? form.id = id : console.log('soy el id en el handlerOnSubmit, estoy vacio')
    dispatch(updateProject(form));
    setForm({
      id: "",
      title: "",
      image: "",
      parragraph: "",
      proyectType: "",
      file: ""
    })
    setPicture("");
    setLoading("")
    setUpload("")
    window.location.reload()
    navigate('/admin')
  }



  return (
    <div className="cardDetail">
      			<Link to = {`/admin/${id}`}> 
            <h2 className="titCardGreen">{title}</h2>
            </Link>
      <img className="imgCard" src={image} alt="img not found" />
      <p className="parrCard">{proyectType}</p>
      <p className="parrCard">{parragraph}</p>

      <form onSubmit={handlerOnSubmit} >
        <div>
          <h1>Editar proyecto</h1>
        </div>
        <div>
          <label>Titulo</label>
        </div>
        <div>
          <input
          placeholder={title}
          type="text"
          name="title"
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
        </div>
        <div>
          <input
          placeholder="Parrafo..."
          type="text"
          name="parragraph"
          value={form.parragraph}
          onChange={handlerOnChange}
          required="required"
          />
            <div>
              {error.parragraph ? error.parragraph : (<p></p>)}
            </div>
        </div>
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
        <div>
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
                <div>
                {loading ? (
                  <img src={picture} alt="No hay imagen" />
                ) : (
                  <p>Aun no has subido una imagen</p>
                )}
              </div>


              </div>
        <div>
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
        <button type="submit" >
          Editar
        </button>

      </form>
    </div>
  );
}
