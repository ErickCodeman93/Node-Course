//Requireds
const fs = require('fs');

let base = 3;
let data = '';

for ( let index = 1; index <= 10 ; index++ ){

	console.log( `${ base } * ${ index } = ${ base * index }` );
	data += `${ base } * ${ index } = ${ base * index } \n`;
} //end for

fs.writeFile( `./tablas/tabla-${ base }.txt`, data, (err) => {
	if (err) throw err;
	console.log(`El archivo tabla-${ base }.txt ha sido creado`);
});

