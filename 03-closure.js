function externe(msg) {
  var a = 'a'
  //pour interne cette portée une une portée de closure
  function interne(params) {
    //pour interne, cette portée est une portée locale
    //ici on a accès à a et à msg
    console.log(msg);
  }
  interne();
}
externe('hello');

//pile d'appels
//
//log
//interne
//externe
//+----------------->temps
