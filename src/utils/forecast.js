const request = require ( 'request' )

const forecast = ( latitude, longitude, callback ) => {

    const url = `https://api.darksky.net/forecast/b461f65102fe8960c64ef744d2bc1592/${latitude},${longitude}?units=si`

    request ( { url, json: true }, ( error, { body } ) => {
        if ( error ) {
            callback ( 'Unable to connect to the weather API.' )
        } else if ( body.error ) {
            callback ( 'Unable to find the location.' )
        } else {
            const forecast = `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100 }% chance of rain.The temperature high is ${body.daily.data[0].temperatureHigh} and temperature low is ${body.daily.data[0].temperatureLow}.`
            callback ( undefined, forecast )
        }
    } )
}

module.exports = forecast
