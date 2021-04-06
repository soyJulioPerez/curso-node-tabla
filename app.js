const { crearArchivo2 } = require('./helpers/multiplicar');

console.clear();

const base = 3;

crearArchivo2(base)
  .then( resp => console.log(resp))
  .catch( err => console.log(err))

crearArchivo2()
  .then( resp => console.log(resp))
  .catch( err => console.log(err))
