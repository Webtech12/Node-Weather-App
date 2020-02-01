const request  = require('request')

const geocode = require('./utils/geocode')

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



// request(mapurl, (err, res) => {
//     const parsed = JSON.parse(res.body)

//     const  { features: [index]    } = parsed

//     const lat = index.center[1];
//     const lon = index.center[0];


//     console.log(lat)
// })

geocode("karachi", (err, data) =>{
    console.log(err);
    console.log(data);
})