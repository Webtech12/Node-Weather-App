const request  = require('request')

const geocode = (address, callback) => {

    // mapbox api endpoint
const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hlcndpbi1nZyIsImEiOiJjazYzYXp0YmYwNjdvM2x0Y2trdTB6ejR2In0.UY5jgrCnFdwRMykLjyRInA&limit=1`

request(mapurl, (err, res) => {
        
    if (err)
        callback("can't connect", undefined)
    else{
        try {
            const parsed = JSON.parse(res.body)
            const  { features: [index]    } = parsed
            const lat = index.center[1];
            const lon = index.center[0];
            const location = index.place_name;
            callback(undefined, {
                lat,
                lon,
                location
            })
        } catch (error) {
            console.log('City Not Found');
        }
        
    }
})
}

module.exports = geocode