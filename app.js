const request  = require('request')

const url = "https://api.darksky.net/forecast/826344e2268e49193c82d0cc9ae92b3a/37.8267,-122.4233"

// requesting and endpoint
request(url, (err, res) => {

    // parsing the json request and storing as an object
    const data = JSON.parse(res.body)
    // destructuring the (nested) object with ES6 syntax and saving in variables
    const { currently : {time, summary } } = data
    // logging the stored properties in the terminal
    console.log(summary)
})