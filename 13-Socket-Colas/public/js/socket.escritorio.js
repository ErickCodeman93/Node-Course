//Comando para establecer la conexión
const socket = io();

const searchParams = new URLSearchParams( window.location.search );


if( ! searchParams.has( 'escritorio' ) ){

	window.location = 'index.html';
	throw new Error( 'El escritorio es necesario' );
} //end if

let escritorio = searchParams.get( 'escritorio' );

$( 'h1' ).text( `Escritorio ${ escritorio }` );

$( 'button' ).on( 'click', ( e ) => {
	e.preventDefault();

	socket.emit( 'atenderTicket', { 
		escritorio : escritorio,

	}, ( resp ) => {
		
		if( resp === 'no hay tickets' ){
			alert( resp );
			$('small').text( resp );
			return;
		} //end if

		$('small').text( `Ticket ${ resp.numero }` );
	});

} );