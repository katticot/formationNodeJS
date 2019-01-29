function doLog(msg) {
  console.log(msg);

}
const nbs = [4, 5,6]

//paradigm impératif (avec du if)
for (let i = 0; i < nbs.length; i++) {
  const elt = nbs[i];
  console.log(elt);

}
//paradigmn functionnel

nbs
//rajouter un filter
//.filter(function(elt){return elt % 2===0})
.filter((elt)=> elt % 2===0)
.forEach(function doLog(msg) {
  console.log(msg);

})
//pile d'appels
//
//      log log
//=>  =>  =>          => =>
//filter              foreach
//
//+----------------->temps
