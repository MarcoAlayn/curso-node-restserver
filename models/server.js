const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors())

        //Lectura y parse del body
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'));
    }


    routes() {

        this.app.use('/api/usuarios', require('../routes/user'))

    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    };
};

module.exports = Server;