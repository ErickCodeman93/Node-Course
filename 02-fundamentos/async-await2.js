
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

let getEmpleado = ( id ) => {

	return new Promise( ( resolve, reject ) => {
		
		let empleadoDB = empleados.find( empleado => empleado.id === id );
	
		if( ! empleadoDB )
			reject( `No existe el empleado con ID: ${ id }` );
		else 
			resolve( empleadoDB );
	} );

}


let getSalario = ( empleado ) => {


	return new Promise( ( resolve, reject ) => {

		let salarioBD = salarios.find( salario => salario.id === empleado.id )
	
		if( ! salarioBD )
			reject( `No se encontró un salario para el empleado: ${ empleado.nombre }` );
		else
			resolve( { 
				nombre: empleado.nombre, 
				salario: salarioBD.salario,
				id : empleado.id 
			} );
	} );
	
}

let getInformation = async ( id ) => {

	let empleado = await getEmpleado( id );
	let salario = await getSalario( empleado );
	
	return `El salario de ${ salario.nombre } es de $${ salario.salario }`;
}

getInformation( 2 )
.then( message => console.log( message ) )
.catch( e => console.log( e ) );

