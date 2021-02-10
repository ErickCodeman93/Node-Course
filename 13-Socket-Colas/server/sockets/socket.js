const { io } = require( '../server' );
const { TicketControl } = require( '../classes/ticket-control' );


const ticketControl = new TicketControl();

io.on( 'connection', ( client ) => {

    let estadoActual = ticketControl.getLastTicket();
    let ultimos4 = ticketControl.getUltimos4();

    client.emit( 'estadoActual', {
        actual: estadoActual,
        ultimos4,
    } );

    client.on( 'atenderTicket', ( data, callback ) => {

        if( ! data.escritorio )
            return callback( {
                err: true,
                msg: 'El escritorio es necesario'
            } );

        let atenderTicket = ticketControl.atenderTicket( data.escritorio );

        callback( atenderTicket );

    } );

    //escuchar el cliente
    client.on( 'siguienteTicket', ( data, callback ) => {
        
        let siguiente = ticketControl.siguiente();
        callback( siguiente );

    } );



    // client.on( 'disconnect', () =>{
    //     console.log('usuario desconectado');
    // });

} );