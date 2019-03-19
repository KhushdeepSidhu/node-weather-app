const express = require ( 'express' )
const path = require ( 'path' )
const hbs = require ( 'hbs' )
const geoCode = require ( './utils/geoCode' )
const forecast = require ( './utils/forecast' )

const app = express()

// Define path for express config
const publicDirectoryPath = path.join ( __dirname, '../public' )
const viewsPath = path.join ( __dirname, '../templates/views' )
const partialsPath = path.join ( __dirname, '../templates/partials' ) 

// Setu handle bars engine and views location
app.set ( 'view engine', 'hbs' )
app.set ( 'views', viewsPath )
hbs.registerPartials ( partialsPath )

// Setup static directory to serve
app.use ( express.static ( publicDirectoryPath ) )

// Render homepage using handle bars
app.get ( '', ( req, res ) => {
    res.render ( 'index', {
        title: 'Weather App',
        name: 'Khushdeep Sidhu'
    } )
} )

// Render about page using handle bars
app.get ( '/about', ( req, res ) => {
    res.render ( 'about', {
        title: 'About Me',
        name: 'Khushdeep Sidhu'
    } )
} )

// Render help page using handle bars
app.get ( '/help', ( req, res ) => {
    res.render ( 'help', {
        message: 'This is my help page',
        title: 'Help',
        name: 'Khushdeep Sidhu'
    } )
} )

// Weather route
app.get ( '/weather', ( req, res ) => {
    if ( !req.query.address ) {
        return res.send ( {
            error: 'Please provide an address.'
        } )
    }

    geoCode ( req.query.address, ( error, { latitude, longitude, location } = {} ) => {
        if ( error ) {
            return res.send ( {
                error
            } )
        } 

        forecast ( latitude, longitude, ( error, forecastData ) => {
                
            if ( error ) {
                return res.send ( {
                    error
                } )
            } 
            
            res.send ( {
                forecastData,
                location
            } )
        
        } )
        
    } )

} )

// Products
app.get ( '/products', ( req, res ) => {
    if ( !req.query.search ) {
        return res.send ( {
            error: 'Please provide a search term.'
        } )
    }

    res.send ( {
        products: []
    } )
} )

// Render help - article not found
app.get ( '/help/*', ( req, res ) => {
    res.render ( '404-page', {
        title: '404 Error',
        message: 'Help article not found.',
        name: 'Khushdeep Sidhu'
    } )
} )

// Render 404 page
app.get ( '*', ( req, res ) => {
    res.render ( '404-page', {
        title: '404 Error',
        message: 'Page not found.',
        name: 'Khushdeep Sidhu'
    } )
} )

// Listen to app 
app.listen ( 3000, () => {
    console.log ( 'Server is listening on port 3000' )
} )