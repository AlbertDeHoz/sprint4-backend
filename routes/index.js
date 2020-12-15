const router = require('express').Router();
const apiRouterUser = require('./api/user.js');
const apiRouterCategoria = require('./api/categoria');
const apiRouterArticulo = require('./api/articulo');

router.use('/usuario',apiRouterUser);
router.use('/categoria',apiRouterCategoria);
router.use('/articulo', apiRouterArticulo);

router.get('/', async(req,res) =>{
    res.send('hola');
})

module.exports = router;