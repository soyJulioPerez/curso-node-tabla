const { crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo2(argv.base, argv.listar)
  .then( resp => console.log(resp))
  .catch( err => console.log(err))

