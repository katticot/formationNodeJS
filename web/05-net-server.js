


const net = require ('http');

const server = net.createServer(
    (req,res)=>{
        res.statusCode=200;
        res.setHeader('Content-Type : text/plain\r\n')
        res.write('hello  ')
        res.end();//OBLIGATOIRE

    
    }
);

server.on('request',(req,res)=>{
    
})

server.on('connection', (socket)=> {
    socket.pipe(process.stdout);//Voir la requete du client
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type : text/plain\r\n');
    socket.write('\r\n');
    socket.write('hello my friend !\r\n');
    socket.end()//obligatoire;

});

server.listen(8080);
server.on('listening', ()=> {
console.log(('server started  : localhost:8080'));

})
