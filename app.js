const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.slice(2)[0] == null) {
    console.log("Null");
} else {
    geocode(process.argv.slice(2)[0], (err, data) => {

        console.log(err);
        console.log(data);
        forecast(data.lat, data.lon, (err, data) => {
            console.log(err);
            console.log(data);
        })

    })
}
