import http from   'http';

const server = http.createServer((req,res) => {
    res.end('Trabajando con NodeJS + Babel chaboz');
}).listen(4001)

console.log ('Checamos que funcione')

export default server;

import { getName, getStar } from "./modulos";

getName('Benito Juan Carlos Tercero de Maria Conchita de Jesus Hernandez');
getStar('Chabelo');

