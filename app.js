const { crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b', {
                  alias: 'base',
                  type: 'number',
                  demandOption: true
                })
                .option('l', {
                  alias: 'listar',
                  type: 'boolean',
                  default: false
                })
                .check( (argv, options) => {
                  if (isNaN(argv.b)) throw 'La base tiene que ser un número';
                  return true;
                })
                .argv;

console.clear();

const base = argv.base;
const listar = argv.listar;
/*
const [,,arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
*/

crearArchivo2(base, listar)
  .then( resp => console.log(resp))
  .catch( err => console.log(err))

/* crearArchivo2()
  .then( resp => console.log(resp))
  .catch( err => console.log(err)) */
