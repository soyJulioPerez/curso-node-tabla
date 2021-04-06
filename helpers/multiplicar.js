const fs = require('fs');

const crearArchivo1 = (base = 5) => {
  let salida = '';
  salida += '===============';
  salida += '  Tabla del', base;
  salida += '===============';

  for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;

  }

  fs.writeFileSync(`tabla-${base}.txt`, salida);
  console.log(`tabla-${base}.txt creado`);
}

const crearArchivo2 = (base = 5) => {
  return new Promise( (resolve, reject) => {
    let salida = '';
    salida += '===============\n';
    salida += `  Tabla del ${base}\n`;
    salida += '===============\n';

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;

    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt creado`);
  });
}

const crearArchivo3 = async (base = 5) => {
  try {
    let salida = '';
    salida += '===============';
    salida += '  Tabla del', base;
    salida += '===============';

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;

    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado`);
    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  crearArchivo1, crearArchivo2, crearArchivo3

}
