const { argv } = require( './config/yargs');
const { getPlace } = require('./place/place');

 getPlace( argv.direccion )
 .then( response => console.log( response ) )
 .catch( e => console.log( e ) );
 