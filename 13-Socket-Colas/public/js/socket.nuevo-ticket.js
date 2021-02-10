
//Comando para establecer la conexión
const socket = io();	

const label = $('#lblNuevoTicket');

//Escuchar conexión
socket.on( 'connect', () => {
	console.log( 'server online' );
}  );

socket.on( 'disconnect', () => {
	console.log( 'server disconnect' );
} );

socket.on( 'estadoActual', ( { actual } ) => {
	
	label.text( actual );

} );

$('button').on('click', ( e ) => {
	e.preventDefault();

	socket.emit( 'siguienteTicket', null, ( siguienteTicket ) => {

		label.text( siguienteTicket );
	} );

} );

