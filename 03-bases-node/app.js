const { argv } = require( './config/yargs' );
const colors = require('colors');
const { crearArchivo, listarTabla } = require( './multiplicar/multiplicar' );

let comando = argv._[0];

switch( comando ){
	case 'listar':
		listarTabla( argv.base, argv.limite );
		break;

	case 'crear':
		crearArchivo( argv.base, argv.limite  )
			.then( response => console.log( `Archivo creado: ${ colors.rainbow( response ) }` ) )
			.catch( e => console.log( e ) );
		break;

	default:
		console.log('Comando no reconocido');
} //end switch


