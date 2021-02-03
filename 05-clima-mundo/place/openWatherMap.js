const axios = require( 'axios' );

const getWatherMapCoorder = async( lat , lng ) => {

	if( lat && lng ){

		try {
			
			const instance = axios.create({
				baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ encodeURI( lat ) }&lon=${ encodeURI( lng ) }&appid={key}`
			});
	
			const { data, status } = await instance.get();
			
			if( Object.keys( data ).length === 0 && status !== 200 )
				throw new Error( `No hay resultados para las siguientes coordenadas lat: ${ lat } y lng:${ lng }` ); 

			const kelvin = 273.15;
			const temp_min = parseFloat( data.main.temp_min ) - kelvin;
			const temp_max = parseFloat( data.main.temp_max ) - kelvin;

			return {
				temp_min: temp_min.toFixed(1),
				temp_max: temp_max.toFixed(1),
			}

		} //end try 
		catch (error) {
			throw new Error( `Problemas con al hacer la peticion con las siguientes coordenadas lat: ${ lat } y lng:${ lng }` );
		} //end catch

	} //end if
	else {
		throw new Error( 'Las coordenadas no fueron proporcionadas' )
	} //end else
} 

module.exports = {
	getWatherMapCoorder
}