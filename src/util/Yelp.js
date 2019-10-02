const apiKey = 'HL_PKcPF70LX_n4-eZLNbpDZH1a54-iPEyKhMQ33uk_53FQKWuT30nOvF20_OI73kz2sxjfnnGHrXV4Rn6kfeJVFt9dyBnqrs0Pb_4w6oRqDslP-xZCxLL0xM5unXHYx';

const Yelp = {
	search (term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
			{headers: 
				{Authorization: `Bearer ${apiKey}` }
  			}).then(response => {
  				return response.json();
  			}).then(jsonResponse => {
  				if (jsonResponse.businesses) {
  					return jsonResponse.businesses.map(business => {
  						return {
  									id: business.id,
  									imageSrc: business.image_url,
  									name: business.name,
									address: business.location.address1,
									city: business.location.city,
									state: business.location.state,
									zipCode: business.location.zip_code,
									category: business.categories[0].title,
									rating: business.rating,
									reviewCount: business.review_count
								}
  					})
  				}
  			});
		
}}

export default Yelp;