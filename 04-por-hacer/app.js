const { argv } = require( './config/yargs' );
const { crear, getListado, actualizar, borrar } = require( './toDo/toDo' );
const colors = require('colors');

// console.log( argv );
let comando = argv._[0];

switch( comando ){
	case 'crear':
		let tarea = crear( argv.descripcion );
		console.log( tarea );
		console.log('Tarea agregada exitosamente !!!');	
		break;

	case 'listar':
		let listado = getListado();
		if( listado.length )
			for ( let tarea of listado ) {
				console.log('===========Por hacer==========='.green);
				console.log( tarea.descripcion );
				console.log( 'Estado:', tarea.completado );
				console.log('==============================='.green);
			} //end for
		else
			console.log('===========No hay tareas por hacer==========='.green);
		
		break;

	case 'actualizar':
		let actualizado = actualizar( argv.descripcion, argv.completado );
		console.log( actualizado );
		if( actualizado )
			console.log('Tarea actualizada exitosamente !!!');	
		break;

	case 'borrar':
		let borrarTarea = borrar( argv.descripcion );
		console.log( borrarTarea );
		if( borrarTarea )
			console.log(  'Tarea Eliminada exitosamente !!!');	
		break;
	
	default:
		console.log( 'No se reconocio el comando' );
}