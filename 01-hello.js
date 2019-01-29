const prenoms = ['Romain', 'Pierre', 'Jacques'];

/**
 * Function qui salut quelqu'un
 * @param {string} prenoms La personne à saluer
 * @returns {string} le message de salutation
 */
function hello(prenoms){
  return 'Bonjour ' + prenoms;
}

for (let i = 0; i < prenoms.length; i++) {
  const p = prenoms[i];
  console.log(hello(p));
}
