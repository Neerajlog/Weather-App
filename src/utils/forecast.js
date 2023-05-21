const request = require('request')
const dotenv=require("dotenv");
dotenv.config();

const forecast = (latitude, longitude, callback) => {
    const url =process.env.WEATHER_STACK_URL+longitude+","+latitude+"units = m"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'It is currently= '+body.current.temperature +'C degress out. There is a '+body.current.precip+' %chance of rain');
        }
    })
}

module.exports = forecast