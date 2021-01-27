//Un callback es un función que se ejecuta despues de que algo sucede.

// setTimeout( () => {
// 	console.log('Hola mundo')
// }, 3000);

let getUsarioById = ( id, callback ) => {

	let usuario = {
		nombre : 'Erick',
		id,
	}

	callback( usuario );
}


getUsarioById( 20, ( usuario ) => console.log( 'Usuario de base de datos', usuario ) );