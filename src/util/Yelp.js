const apiKey = 'vwxuH0w4QNvrpWJ-wnEli1dh2Yb_9fmaN6C0D51dthEOX7y442GxsmXrntbmsq5kKy643DHlGpGUspyFTocUUCVKJdcRuy2mLi93jpL7CP1ab10TvV1X1gT9EjYNXXYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }}).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        //console.log(jsonResponse.businesses);
                        return jsonResponse.businesses.map(business => ({
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
                        ));
                    }
                });
    }
};

export default Yelp;