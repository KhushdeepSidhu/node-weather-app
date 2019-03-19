// HTTP request
const getData = async ( address ) => {
    const response = await fetch ( `/weather?address=${address}` )
    return await response.json ()
}

// Setup Elements
const weatherFormEl = document.querySelector( 'form' )
const search = document.querySelector ( 'input' )
const forecastMessageEl = document.querySelector ( '#forecast' )
const locationMessageEl = document.querySelector ( '#location' )

// Add event listener for form 
weatherFormEl.addEventListener ( 'submit', async ( event ) => {
    
    event.preventDefault()

    forecastMessageEl.textContent = 'Loading...'
    locationMessageEl.textContent = ''

    const data = await getData ( search.value )
    if ( data.error ) {
        return forecastMessageEl.textContent = data.error
    }

    forecastMessageEl.textContent = data.forecastData
    locationMessageEl.textContent = data.location

} ) 