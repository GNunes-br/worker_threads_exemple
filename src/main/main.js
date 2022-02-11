import express from 'express';
import server from './routes/server.js';

const app = express();

const port = 3000;

const startApp = async () => {

    app.use(server)

    app.listen(port, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`⚡️[${new Date()}]: Server is running at http://localhost:${port}`)
        }
    })
}

startApp();