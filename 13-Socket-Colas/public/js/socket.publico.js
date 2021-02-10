//Comando para establecer la conexión
const socket = io();

//Escuchar conexión
socket.on( 'connect', () => {
	console.log( 'server online' );
}  );

socket.on( 'disconnect', () => {
	console.log( 'server disconnect' );
} );

socket.on( 'estadoActual', ( data ) => {
	
	console.log( data );

} );