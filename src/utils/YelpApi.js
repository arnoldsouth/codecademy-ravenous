const apiKey = process.env.REACT_APP_YELP_API_KEY;
const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
const baseUrl = `https://api.yelp.com/v3`;

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${apiKey}` },
};

export const YelpApi = {
  search(searchInput, searchLocation, sortBy) {
    return fetch(
      `${corsAnywhere}${baseUrl}/businesses/search?term=${searchInput}&location=${searchLocation}&sort_by=${sortBy}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            image: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};
