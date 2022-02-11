const { isMainThread, Worker, parentPort, workerData } = require('worker_threads')

const data = {
    workerData: 1
}

console.log(data);

if(isMainThread) {
    const worker = new Worker(__filename, data);
    worker.on('message', (message) => console.log(message))
} else {
    const someMath = workerData + 2
    parentPort.postMessage(someMath)
}