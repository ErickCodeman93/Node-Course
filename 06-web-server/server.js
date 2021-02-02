const express = require('express');
const app = express();

const hbs = require('hbs');
require( './hbs/helpers' );

const port = process.env.PORT || 3000;

app.use( express.static(  __dirname + '/public' ) );

//Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

// Urls 
app.get('/', (req, res) => {

	res.render( 'home',{
		nombre : 'ErIcK AlvA'
	} );
});

app.get('/about', (req, res) => {

	res.render( 'about',{
		img: 'https://loremflickr.com/320/240'
	} );
});
 
app.get('/data', (req, res) => {	
	res.send('Hola Mundo');
});

app.listen( port , () => {
	console.log( `Escuchando en el puerto ${ port }` );
});

// app.get('/', (req, res) => {

// 	let salida = {
// 		nombre : 'Erick',
// 		edad : 28,
// 		url : req.url
// 	}

// 	res.send( salida );
// })