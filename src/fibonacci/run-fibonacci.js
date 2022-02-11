import { iterate } from 'fibonacci';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads'

const runFibonacci = workerData => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/fibonacci/run-fibonacci.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if(code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

if(!isMainThread) {
    const result = iterate(workerData.iterations);
    parentPort.postMessage(result)
}


export default runFibonacci;