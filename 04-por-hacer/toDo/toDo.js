const fs = require('fs');
let dataJson = require( '../db/data.json' );

let listadoPorHacer = [];

const guardarDB = () => {

	let data = JSON.stringify( listadoPorHacer );

	fs.writeFile( `./db/data.json`, data, (err) => {
		
		if (err) throw new Error( 'No se pudo grabar', err );
	} );

}

const cargarDB = () => {

	try {
		listadoPorHacer = dataJson;
	} //end try 
	catch (error) {
		listadoPorHacer = [];
	} //end catch
	
}

const crear = ( descripcion ) => {

	cargarDB();

	let porHacer = {
		descripcion,
		completado : false,
	}

	listadoPorHacer.push( porHacer );

	guardarDB();

	return porHacer;
}

const getListado = () => {

	cargarDB() ;

	return listadoPorHacer;
	
}

const actualizar = ( descripcion, completado = true ) => {

	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

	if( index >= 0 ){
		listadoPorHacer[ index ].completado = completado; 
		guardarDB();
		return true;
	} //end if
	else {
		return false;
	}
}

const borrar = ( descripcion ) => {

	cargarDB();
	let nuevoListadoPorHacer = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );
	
	if( nuevoListadoPorHacer.length === listadoPorHacer.length ){
		return false;
	} //end if
	else{
		listadoPorHacer = nuevoListadoPorHacer;
		guardarDB();
		return true;
	} //end else
	
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar,
}