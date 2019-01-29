function externe(msg) {
  //pour interne cette portée une une portée de closure
  function interne() {
    //pour interne, cette portée est une portée locale
    //ici on a accès à a et à msg
    console.log(msg);
  }
  return interne;
}
const helloFct= externe('hello');
helloFct();


//pile d'appels
//
//      log
//externe-interne/heloFct
//
//+----------------->temps

for (let i = 0; i < 3; i++) {
  setTimeout(function () {console.log(i);

  },1000)
}
for (let i = 0; i < 3; i++) {
  setTimeout(externe(i),100)
}
