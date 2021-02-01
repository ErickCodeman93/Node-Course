const { argv } = require( './config/yargs');
const { getPlace } = require('./place/place');
const { getWatherMapCoorder } = require('./place/openWatherMap');


const getInformationByTwoSrvice = async() => {

	const service1 = await getPlace( argv.direccion );
	const { lat, lng } = service1;
	const service2 = await getWatherMapCoorder( lat, lng );
	
	return {
		status: 200,
		msg: 'success',
		data: `La temperatura máxima será de ${ service2.temp_max }° y la miníma será ${ service2.temp_min }° en la ciudad de ${ service1.name }`,
	}
}

getInformationByTwoSrvice()
.then( response => { 
	console.log( response.data ); 
})
.catch( e => console.log( 'Error!!!', e ) );
 