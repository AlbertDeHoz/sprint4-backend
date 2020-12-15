
//importar el token, como lo hago??
const token = require('../services/token');
const {User} = require('../models/');

const Errors = (user) => {


}

exports.checkToken = async (req, res, next) =>{
    if (!req.headers.token){
        return res.status(404).send({ error: 'Token Not Found'})
    }
    const tokenUser = req.headers.token
    const user = await token.decode(tokenUser)
    if (user.rol==='Administrador' || user.rol==='Vendedor'|| user.rol==='Almacenero' ){
        next();
    }else if(!user){
        return res.send('error, usuario no existe')
    }
    else if(user.error){
        return res.send('error, token no existe')
    }
    else{
        return res.status(403).send({message:'No autorizado'})
    }

}
//plaza de la paz, 8:00 am
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3OTc1OTAxLCJleHAiOjE2MDgwNjIzMDF9.KcsQ739QoYXr02OiRjGIWlRTntJHo1P-nLaLP03dNUo