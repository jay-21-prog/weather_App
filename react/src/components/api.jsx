// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60';
// export const geoApiOptions = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '1fd9db08f9mshec446cdcbc63801p14ca96jsnd2ead34957c2',
// 		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };
// API configuration
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1fd9db08f9mshec446cdcbc63801p14ca96jsnd2ead34957c2',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  },
};
// export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60";

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';
export const WEATHER_API_KEY = 'd85bf24daf35edd01ee5db01868ba5d4';
