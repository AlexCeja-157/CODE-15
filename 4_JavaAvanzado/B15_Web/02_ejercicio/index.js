 import http from  'http';
import { getName, getStar } from "./modulos";

 const server = http.createServer((req,res) => {
     res.end('Trabajando con NodeJS + Babel chavox');
 }).listen(4001)

  getName('Benito Juan Carlos Tercero de Maria Conchita de Jesus Hernandez');
  getStar('Chabelo');

 console.log ('Checamos que funcione')

export default server;



