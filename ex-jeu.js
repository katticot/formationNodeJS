const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const tab=[]
//1.Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
const min =0
const max =100
const nombreAtrouver= getRandomInt(min, max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(nombreAtrouver);


//2.Demander et récupérer la saisie,
//afficher si le nombre est plus grand, plus petit ou trouvé (API Readline sur Node.js)
function jouer() {
  if (tab.length) {
    console.log('ATTENTION !!! Vous avez déjà tappé :\n'+tab);
  }
  rl.question('Trouve le nombre ', (answer) => {
    answer=Number(answer)
    if (Number.isNaN(answer)) {
      console.log("Merci de tapper un chiffre ou un entier");

    }


    if (answer===nombreAtrouver) {
    console.log(`BRAVO c'était : ${answer} !`);
    rl.close()
    } else {
      if (!Number.isNaN(answer)) {
        tab.push(answer);

      }

if (answer>nombreAtrouver) {console.log("Trop grand !");

} else {console.log("Trop petit !")}
      jouer()
    }


  });
}
jouer()
