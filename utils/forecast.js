const request  = require('request')

const forecast= (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/826344e2268e49193c82d0cc9ae92b3a/${lat},${lon}`

// requesting and endpoint darksky
    request(url, (err, res) => {

        if (err){
            callback("can't connect", undefined)
        }else if(isNaN(lat) || isNaN(lon)){
            callback("NaN", undefined)
        }else {
        // parsing the json request and storing as an object
        const data = JSON.parse(res.body)
        // destructuring the (nested) object with ES6 syntax and saving in variables
        const { daily : {data : [s] } } = data
        // logging the stored properties in the terminal
        // callback(undefined, data)
        callback(undefined, `It is currently ${data.currently.temperature} degrees . There is a ${s.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast