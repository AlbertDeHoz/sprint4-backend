const jwt = require('jsonwebtoken')
const {User} = require('../models/')
const tokenKey = require('../secret/config')

module.exports ={
    encode: (user) =>{
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol
        },tokenKey.secret,{
            expiresIn: 60*60*24
        });
        return token
    },
    decode: async (token)=>{
        try{
            const {id} = jwt.verify(token,tokenKey.secret);
            const user = await User.findOne({
                where:{
                    id:id,
                }
            })
            if (user){
                return user                
            }else{
                return false
            }

        }catch(error){
            return {error:error}
        }

        

    }
/*    decode: (User)=>{
        try{
            const token = req.headers['user-token'];
            const {id} = jwt.verify(token,tokenKey);
            const user = models.User.findOne({where:{
              id:id
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        }catch(error){
            //const newToken = checkToken(token);
            return 'error'
        }
    }*/
}