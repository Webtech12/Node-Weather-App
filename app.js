const request  = require('request')

// const url = "https://api.darksky.net/forecast/826344e2268e49193c82d0cc9ae92b3a/37.8267,-122.4233"

// // requesting and endpoint darksky
// request(url, (err, res) => {

//     // parsing the json request and storing as an object
//     const data = JSON.parse(res.body)
//     // destructuring the (nested) object with ES6 syntax and saving in variables
//     const { daily : {data : [s] } } = data

//     //const [first] = s
//     // logging the stored properties in the terminal
//     console.log(s.summary)
//     // console.log(`It is currently ${temperature} degrees . There is a ${precipProbability}% chance of rain`)
// })


// mapbox api endpoint
// const mapurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hlcndpbi1nZyIsImEiOiJjazYzYXp0YmYwNjdvM2x0Y2trdTB6ejR2In0.UY5jgrCnFdwRMykLjyRInA&limit=1"

// request(mapurl, (err, res) => {
//     const parsed = JSON.parse(res.body)

//     const  { features: [index]    } = parsed

//     const lat = index.center[1];
//     const lon = index.center[0];


//     console.log(lat)
// })


// callback practice


const add = (vals, callback) => {
    setTimeout(() => {
        callback(vals[0] + vals[1])
    }, 200);
}

const vals = [2,4]

add(vals, (params) => {
    console.log(params)
})