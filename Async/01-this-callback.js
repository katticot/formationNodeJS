const fs = require('fs')
const path= require('path')

//synchronse 
const buffer = fs.readFileSync('.gitignore');
const gitIgnirePath= path.resolve(__dirname,'gitignore');
console.log(buffer.toString());;
