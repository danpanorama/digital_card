const encodedParams = new URLSearchParams();
encodedParams.append("cities", "[{\"name\":\"Lisbon\",\"country\":\"Portugal\"},{\"name\":\"Paris\",\"country\":\"Spain (example of wrong country)\"},{\"name\":\"Hamilton\",\"country\":\"Bermuda\"},{\"name\":\"Saint Francisc (example of wrong city name)\",\"country\":\"United States\"}]");
encodedParams.append("currencies", "[\"USD\",\"Euro (example of wrong currency code)\",\"CHF\"]");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
		'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
	},
	body: encodedParams
};   

fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_details_by_name', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));