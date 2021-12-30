const {
  Proyect,
} = require("../db");
const { Op } = require('sequelize');


const addProyect = async (req, res) => {
  const { title, image, parragraph, proyectType, file } = req.body;

  try {
    const createdProyect = await Proyect.create({
      image: image,
      title: title,
      parragraph: parragraph,
      proyectType: proyectType, 
      file: file
    });

    createdProyect ? res.send(createdProyect) : res.send ('Project could not be created')
  } catch (error) {
    console.log(error);
  }
};

const allProyects = async (req, res) => {
  const { title } = req.query;

  try {
    let dbProjects = await Proyect.findAll();

    if (title) {
    const projectByTitle = await Proyect.findAll({where: { title: {[Op.iLike] : `%${title}%`}}})
    
    res.send(projectByTitle)
    } else {
      res.send(dbProjects);
    }
  } 
  catch (error) {
    console.log(error);
  }
};

const deleteProyect = async (req, res) => {
  const { id } = req.query;

  try{
    const deleteProjectById = await Proyect.findByPk(id);


    deleteProjectById ? res.json(await deleteProjectById.destroy()) : res.send('The project could not be delted')

  }
  catch (error) {
    console.log(error)
  }


};

const updateProyect = async (req, res) => {
  const { title, image, parragraph, id, proyectType, file } = req.body;
  
  try {
    const projectById = await Proyect.findByPk(id);
    const infoUpdate = {
      title, image, parragraph, id, proyectType, file
    }

    
    if (projectById) {        
        projectById ? res.send(await projectById.update(infoUpdate)) : res.send('The project could not be updated'); 
    } else {
      const allProjects = await Proyect.findAll();

      allProjects
        ? res.send(allProjects)
        : res.send("Error finding the projects");
    }
  } catch (error) {
    console.log(error);
  }
};

const projectById = async(req, res) => {
  const { id } = req.query;

  try{
    const projectById = await Proyect.findByPk(id)

    projectById ? res.send(projectById) : res.send(`No project founded with the id: ${id}`)

  }
  catch(error){
    console.log(error)

  }
}



module.exports = {
  addProyect,
  allProyects,
  deleteProyect,
  updateProyect,
  projectById
};
