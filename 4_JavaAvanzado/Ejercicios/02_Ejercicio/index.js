import http from 'http';
import { getName,getStar } from './modulos';

const server = http.createServer((req,res)=>{
    res.end('Trabajando con NodeJs + Babel');
}).listen(4001);

getName('Chris Alexander Ceja Morales');
getStar('Toy Story');

console.log('Revisamos que funcione');

export default server;
