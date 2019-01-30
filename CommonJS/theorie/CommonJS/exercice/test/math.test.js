const chalk = require('chalk');
const myMath = require ('../src/math')//inclus le fichier
const assert = require('assert')
 try {
  assert.strictEqual(myMath.sum(1,2),3,'sum(1,2)!==3');//3
 console.log(chalk.green('les test de math.test sont OK'));

 } catch (err) {
   console.log(chalk.red(' Au moins un des tests de math.test FAIL'));
   console.log('messsage associé' +err.message);
   process.exit(1)



 }
