const axios = require( 'axios' );

const getPlace = async( direccion ) => {

	const encodeUrl = encodeURI( direccion );

	const instance = axios.create({
		baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encodeUrl }`,
		headers: {'X-rapidapi-Key': '7fce313edcmshb2486141ab984dcp135d80jsnfcfc26d9052a'}
	});

	try {

		const response = await instance.get();

		if( Object.keys( response.data ).length === 0 && response.status !== 200 )
			throw new Error( `No hay resultados para esta dirección ${ direccion }` ); 

		const data = response.data;
		const name = data.name;
		const lat = data.coord.lat;
		const lng =data.coord.lon;
		
		return {
			name,
			lat,
			lng,
		}

	} //end try  
	catch (error) {
		throw new Error( `Problemas con al hacer la peticion con la dirección ${ direccion }` );
	} //end catch
}

module.exports = {
	getPlace
}