const fs = require('fs');
const colors = require('colors').argv;

let listarTabla = (base, limite = 10) => {

    console.log(`===========================`.green);
    console.log(`Tabla de ${ base }`.green);
    console.log(`===========================`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es valido.`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `2 * ${ i } = ${ 2 * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}