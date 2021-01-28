//Requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo1 = async ( base ) => {

	if( base ){

		let data = '';

		for ( let index = 1; index <= 10 ; index++ ){

			console.log( `${ base } * ${ index } = ${ base * index }` );
			data += `${ base } * ${ index } = ${ base * index } \n`;
		} //end for

		fs.writeFile( `./tablas/tabla-${ base }.txt`, data, (err) => {
			if (err) 
				throw err;
			else
				console.log(`El archivo tabla-${ base }.txt ha sido creado`);
		});

		return `tabla-${ base }.txt`;
	} //end if
	else
		throw new Error( 'La base debe ser mayor a cero' );

} //end function

let crearArchivo = ( base, limite = 10 ) => {

	return new Promise( ( resolve, reject ) => {

		if( ! Number( base ) ){
			reject( `El valor introducido '${ base }' no es un número` );
			return;
		} //end if

		let data = '';

		for ( let index = 1; index <= limite ; index++ ){

			console.log( `${ base } * ${ index } = ${ base * index }` );
			data += `${ base } * ${ index } = ${ base * index } \n`;
		} //end for

		fs.writeFile( `./tablas/tabla-${ base }${ limite != 10 ? '-to-' + limite : '' }.txt`, data, (err) => {
			if (err) 
				reject( err );
			else
				resolve( `tabla-${ base }${ limite != 10 ? '-to-' + limite : '' }.txt` );
		});

	});
} //end function

let listarTabla = ( base, limite = 10 ) =>{

	if( ! Number( base ) || ! base ){
		console.log( `El valor introducido '${ base }' no es un número o no es mayor cero` );
		return;
	} //end if

	console.log( '======================================'.green );
	console.log( `====== Tabla de multiplicar del ${ base } =====`.rainbow );
	console.log( '======================================'.green );

	for ( let index = 1; index <= limite ; index++ ){
		console.log( `${ base } * ${ index } = ${ base * index }` );
	} //end for

} //end function

module.exports = {
	crearArchivo,
	crearArchivo1,
	listarTabla,
}