const express = require('express');
const app = express();
 
app.use( express.static(  __dirname + '/public' ) );

// app.get('/', (req, res) => {

// 	let salida = {
// 		nombre : 'Erick',
// 		edad : 28,
// 		url : req.url
// 	}

// 	res.send( salida );
// })
 
app.get('/data', (req, res) => {	
	res.send('Hola Mundo');
})

app.listen(3000, () => {
	console.log( 'Escuchando en el puerto 3000' );
});