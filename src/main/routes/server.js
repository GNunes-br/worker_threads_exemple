import { Router } from 'express';
import runFibonacci from '../../fibonacci/run-fibonacci.js'

const server = Router();

server.get('/', async (req,res) => {
    runFibonacci({ iterations: 10000 }).then(result => console.log(result)).catch((err)=> console.log(err));
    res.send('processing');
})

export default server;
