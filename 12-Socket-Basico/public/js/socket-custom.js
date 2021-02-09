const socket = io();
        
//Escuchar informacion
socket.on( 'connect', () =>{
	console.log('Conectado al servidor');
});

socket.on( 'disconnect', () =>{
	console.log('Conexion perdida');
});

//Enviar informacion
socket.emit( 'enviarMensaje',{
	user: 'Erick Alva',
	msj: 'Hola mundo',
}, ( resp ) => {
	console.log( resp );
});

	//escuchar al servidor
socket.on( 'enviarMensaje', ( msg ) => {
	console.log( msg );
} );