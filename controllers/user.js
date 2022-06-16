const { response, request } = require('express')

const usuariosGet = (req, res = response) => {

    const { nombre, fullstackdeveloper, edad = "no edad" } = req.query

    res.json({
        msg: 'get API - controlador',
        nombre,
        fullstackdeveloper,
        edad
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre
    })
}

const usuariosPut = (req = request, res = response) => {

    // console.log(req.params.id)//?
    const id = req.params.id
    res.status(201).json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete

}