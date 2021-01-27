//Un callback es un función que se ejecuta despues de que algo sucede.

let empleados = [{
	id: 1,
	nombre: 'Erick',
},{
	id: 2,
	nombre: 'Fernando',
},{
	id: 3,
	nombre: 'Laura',
}];

let salarios =[{
	id: 1,
	salario: 1000,
},{
	id: 2,
	salario: 2000,
}];

let getEmpleado = ( id, callback ) => {
	let empleadoDB = empleados.find( empleado => empleado.id === id );
	// console.log( empleadoDB );

	if( ! empleadoDB )
		callback( `No existe el empleado con ID: ${ id }` );
	else 
		callback( null, empleadoDB );
	
}

let getSalario = ( empleado, callback ) => {
	// console.log( empleado );
	let salarioBD = salarios.find( salario => salario.id === empleado.id )

	if( ! salarioBD )
		callback( `No se encontró un salario para el empleado: ${ empleado.nombre }` );
	else
		callback( null, { nombre: empleado.nombre , salario: salarioBD.salario } );
}

getEmpleado( 2, ( err, empleado ) =>{

	if( err )
		return console.log( err );

	// console.log( empleado );
	getSalario( empleado, ( err, salario ) => {
	
		if( err )
			return console.log( err )

		console.log( salario );
	} );
} );