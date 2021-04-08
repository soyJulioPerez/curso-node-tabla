const fs = require('fs');
const colors = require('colors');

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

const crearArchivo2 = (base, listar, hasta) => {
  return new Promise( (resolve, reject) => {
    let salida = header(base);
    let consola = header(base, 'consola');

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
      consola += `${base} x ${i} = ` + `${base*i}`.blue + `\n`;
    }

    if (listar) { console.log(consola); }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt creado`);
  });
}

const header = (base, tipo = 'file') => {
  let headerText = '';
  if (tipo === 'file') {
    headerText += '===============\n';
    headerText += `  Tabla del ${base}  \n`;
    headerText += '===============\n';
  } else {
    headerText += '===============\n'.cyan;
    headerText += `  Tabla del ${base}  \n`.cyan;
    headerText += '===============\n'.cyan;
  }
  return headerText;
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
