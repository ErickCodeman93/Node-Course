const { io } = require( '../server' );

io.on( 'connection', ( client ) => {

    console.log( 'usuario conectado' );

    client.emit( 'enviarMensaje',{
        user: 'Admin',
        msj: 'Bienvenido',
    });

    client.on( 'disconnect', () =>{
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on( 'enviarMensaje', ( msg, callback ) => {
        
        // if( msg.user ){
        //     callback({
        //         resp:'Salio bien'
        //     });
        console.log( msg );
        // } //end if
        // else
        //     callback({
        //         resp:'Salio Mal !!!!!!!!!!!!!!!!!!!!!!'
        //     });

		client.broadcast.emit( 'enviarMensaje', msg );

    } );

} );