//On a des objets prédéfinis par le language
console.log(typeof Map);

//on a des objets prédéfinis par Node.js
console.log(typeof process);

//on a des objets définis par le navigateur
console.log(typeof document);

// Un objet JS est un dictionnaire (systeme clé/vameur dynamique)
// EN java l'objet est statique ( création d'une classe)
const coords  = {
  y:10,
  x:20
}
console.log(coords);
coords.z=30

console['log'](coords);
console['log'](Object.values(coords));


