
//Retorna una promesa
// let getNombre = async() => 'Erick';
// console.log( getNombre() );


let getNombre = () => {

	return new Promise( ( resolve, reject ) => {

		setTimeout( () => {
			
			resolve( 'Erick' )
		}, 3000 );
	}  );
}

let saludo = async() => {
	
	let nombre = await getNombre();
	return `Hola ${ nombre }`;
}

saludo().then( mensaje => {
	console.log( mensaje );
} )
.catch( e => { console.log( 'Error Async', e ) });
