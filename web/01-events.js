const {EventEmitter} = require('events');

const ee = new EventEmitter();

function createUser(name) {
    ee.emit('user.created',name)
}


function createUser(name) {
    ee.once('user.created',name)
    console.log('SMS to '+ name);
    
}


createUser('Toto')