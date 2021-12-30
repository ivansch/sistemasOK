const { Proyect } = require("../db");

const infoProject = [
{
    title:"nuevo sistema de riego por goteo",
    image:"https://gardeneas.com/wp-content/uploads/2016/12/Imagen_Post_854x450-_-Copia-01.png",
    parragraph:"tenemos un nuevo sistema de riego por goteo, muy eficiente, que hace crecer su produccion en un 17% anual",
    proyectType:"sistema de riego",
},
{
    title:"nueva bomba de riego",
    image:"https://agriculturers.com/wp-content/uploads/2020/11/fdd-Hagamos-mas-eficiente-el-riego-1000x500.jpg",
    parragraph:"tenemos una nueva bomba de riego, muy eficiente, que hace crecer su produccion en un 7% anual",
    proyectType:"sistema de riego",
},
{
    title:"nuevo sistema de riego para invernadero",
    image:"https://www.iagua.es/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/riegoaspersion_portada.jpg?itok=qvbKvC79",
    parragraph:"tenemos un nuevo sistema de riego para invernadero, muy eficiente, que hace crecer su produccion en un 70% anual",
    proyectType:"sistema de riego",
},
{
    title:"nuevo aspersor de riego",
    image:"https://d2ke0ff4uknkae.cloudfront.net/hortalizas/wp-content/uploads/2019/04/Limpieza-1.jpg",
    parragraph:"tenemos un nuevo aspersor de riego, muy eficiente, que hace crecer su produccion en un 5% anual",
    proyectType:"sistema de riego",
},
{
    title:"nuevo sistema de riego artificial a precision",
    image:"https://cdn.cienradios.com/wp-content/uploads/sites/12/2014/03/Riego05-Manejo-de-agua-riego-por-pivot-3-Gentileza-INTA.jpg",
    parragraph:"tenemos un nuevo sistema de riego artificial a precision, muy eficiente, que hace crecer su produccion en un 150% anual",
    proyectType:"sistema de riego",
},
{
    title:"nuevo sistema de riego por goteo",
    image:"https://gardeneas.com/wp-content/uploads/2016/12/Imagen_Post_854x450-_-Copia-01.png",
    parragraph:"tenemos un nuevo sistema de riego por goteo, muy eficiente, que hace crecer su produccion en un 17% anual",
    proyectType:"productivo integral",
},
{
    title:"nueva bomba de riego",
    image:"https://agriculturers.com/wp-content/uploads/2020/11/fdd-Hagamos-mas-eficiente-el-riego-1000x500.jpg",
    parragraph:"tenemos una nueva bomba de riego, muy eficiente, que hace crecer su produccion en un 7% anual",
    proyectType:"productivo integral",
},
{
    title:"nuevo sistema de riego para invernadero",
    image:"https://www.iagua.es/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/riegoaspersion_portada.jpg?itok=qvbKvC79",
    parragraph:"tenemos un nuevo sistema de riego para invernadero, muy eficiente, que hace crecer su produccion en un 70% anual",
    proyectType:"productivo integral",
},
{
    title:"nuevo aspersor de riego",
    image:"https://d2ke0ff4uknkae.cloudfront.net/hortalizas/wp-content/uploads/2019/04/Limpieza-1.jpg",
    parragraph:"tenemos un nuevo aspersor de riego, muy eficiente, que hace crecer su produccion en un 5% anual",
    proyectType:"productivo integral",
},
{
    title:"nuevo sistema de riego artificial a precision",
    image:"https://cdn.cienradios.com/wp-content/uploads/sites/12/2014/03/Riego05-Manejo-de-agua-riego-por-pivot-3-Gentileza-INTA.jpg",
    parragraph:"tenemos un nuevo sistema de riego artificial a precision, muy eficiente, que hace crecer su produccion en un 150% anual",
    proyectType:"productivo integral",
},
];

async function preloadProject() {
  try {
    await Proyect.bulkCreate(infoProject);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    preloadProject,
};
