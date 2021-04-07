const { crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b', {
                  alias: 'base',
                  type: 'number',
                  demandOption: true
                })
                .check( (argv, options) => {
                  if (isNaN(argv.b)) throw 'La base tiene que ser un número';
                  return true;
                })
                .argv;

console.clear();
console.log(argv);
console.log('base: yargs', argv.base);

const base = argv.base;
/*
const [,,arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
*/

crearArchivo2(base)
  .then( resp => console.log(resp))
  .catch( err => console.log(err))

crearArchivo2()
  .then( resp => console.log(resp))
  .catch( err => console.log(err))
