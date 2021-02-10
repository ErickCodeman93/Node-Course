//Comando para establecer la conexión
const socket = io();

const lblTicket1 = $( '#lblTicket1' );
const lblTicket2 = $( '#lblTicket2' );
const lblTicket3 = $( '#lblTicket3' );
const lblTicket4 = $( '#lblTicket4' );

const lblEscritorio1 = $( '#lblEscritorio1' );
const lblEscritorio2 = $( '#lblEscritorio2' );
const lblEscritorio3 = $( '#lblEscritorio3' );
const lblEscritorio4 = $( '#lblEscritorio4' );

const lblTicket = [ lblTicket1, lblTicket2, lblTicket3, lblTicket4 ];
const lblEscritorio = [ lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4 ];


//Escuchar conexión
socket.on( 'connect', () => {
	console.log( 'server online' );
}  );

socket.on( 'disconnect', () => {
	console.log( 'server disconnect' );
} );

socket.on( 'estadoActual', ( data ) => {
	
	if( typeof data.atenderTicket === 'object' ){

		let audio = new Audio("audio/new-ticket.mp3");
		audio.play();
	} //end if
 
	actualizaHtml( data.ultimos4 );

} );


const actualizaHtml = ( ultimos4 ) => {

	for( let i = 0; i <= ultimos4.length -1; i ++ ){

		lblTicket[ i ].text( `Ticket ${ ultimos4[ i ].numero }` );
		lblEscritorio[ i ].text( `Escritorio ${ ultimos4[ i ].escritorio }` );

	} //end for
}