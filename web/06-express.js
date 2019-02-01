const express = require ('express');

const app = express();
app.get('/', (req,res)=>{
    res.send('hello');
})

app.get('/api/contact/12', (req,res)=>{
    res.json({id:12,
prenom:'romain'});
})

app.listen('8080',()=>{
    console.log('Server started http://localhost:8080');

})
