setTimeout(() => {
  console.log('A');
}, 500);

setTimeout(() => {
  console.log('B');
}, 1000);

setTimeout(() => {
  console.log('C');
}, 0);

setTimeout(() => {
  console.log('D');
}, 500);

console.log('E');
//ECADB

//pile d'appels
//
//                                          log           log         log         log
//st -  st- st - st - log ...( on boucle)...callbckC ... callbckA...callbckD....callbckB
//
//+----------------------------------------------------------------------------------------->temps
//                      E                   C               A           D           B
//file d'attente  (0ms): callbckC
//file d'attente  (1ms):
//file d'attente  (500ms): callbckA - callbckD
//file d'attente  (501): callbckD
//file d'attente  (502ms):
//file d'attente  (1000ms): callbckB
//file d'attente  (1001ms):
