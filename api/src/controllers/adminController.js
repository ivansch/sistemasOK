const { Admin } = require('../db.js');
const { Op } = require('sequelize');

const login = async (req, res) => {
    const { mail, password } = req.body;

    try{
        const adminDb = await Admin.findOne({
            where: { 
                [Op.and]: [{mail: mail}, {password: password}]
            }
        })
        
        adminDb ? res.send(adminDb) : res.send('No se ha encontrado un admin con ese usuario y contraseña')
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    login,
}