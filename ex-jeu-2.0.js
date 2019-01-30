
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const tab = []
//-----------------Créer un objet random
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random = {
   getRandom,
   getRandomArbitrary,
   getRandomInt,
   getRandomIntInclusive
};
//----------------------Créer une fonction constructeur Jeu
function Jeu(options={}) {
  const {min=0,max=100}=options;
  //todo option == undifined
  //const min = options.min || 0;
  // todo ternaire const max = options.max || 0;
  this.nombreAtrouver = random.getRandomInt(min, max)
  if (options) {this.nombreAtrouver = random.getRandomInt(options.min, options.max)}
}

Jeu.prototype.jouer = function () {
  console.log('nombre :'+this.nombreAtrouver);

  if (tab.length) {
    console.log('ATTENTION !!! Vous avez déjà tappé :\n' + tab);
  }
  rl.question('Trouve le nombre ', (answer) => {
    answer = Number(answer)
    if (Number.isNaN(answer)) {
      console.log("Merci de tapper un chiffre ou un entier");

    }


    if (answer === this.nombreAtrouver) {
      console.log(`BRAVO c'était : ${answer} !`);
      rl.close()
    } else {
      if (!Number.isNaN(answer)) {
        tab.push(answer);

      }

      if (answer > this.nombreAtrouver) {
        console.log("Trop grand !");

      } else { console.log("Trop petit !") }
      this.jouer()
    }


  });
};
const game = new Jeu()
//game.jouer();
const options = {'min':200,
              'max':2000}
game.jouer(options);
