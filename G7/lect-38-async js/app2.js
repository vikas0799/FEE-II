const url = 'https://indian-railway-pnr-status.p.rapidapi.com/pnr-status?api_key=%3CREQUIRED%3E';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '50c7bb8858msh266ff9325450134p130a35jsnfb3263b5bbf5',
		'X-RapidAPI-Host': 'indian-railway-pnr-status.p.rapidapi.com'
	},
	body: new URLSearchParams({
		pnr_number: '6504558282'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}