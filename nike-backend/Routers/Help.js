const express = require( 'express' )              //importing the express modules
const router = express.Router()                // using express with router it is used for routing purpose
const newschema = require( '../Schema/Newschema' )


//   using the get request read the data from database
router.get( '/', async ( req, res ) => {              // async request used for not blocking the process for the response
    try {
        const help = await newschema.find()
        res.json( help )                        // here getting data json format

    } catch ( err ) {                           //if in case any error it comes to catch by sending us error response
        res.send( 'error' + err )
    }
} )


// using post request for giving the data
router.post( '/', async ( req, res ) => {
    const help = new newschema( {              //ftech the data accroding the schema
        email: req.body.email,
        password: req.body.password,
        newpassword: req.body.password_confirmation,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    } )

    try {

        const a1 = await help.save()
        res.json( a1 )

    } catch ( err ) {
        res.send( err )

    }

} )

// using the patch 
router.patch( '/:id', async ( req, res ) => {
    try {
        const help = await newschema.findById( req.params.id )
        newschema.name = req.body.name
        const a1 = await help.save()
        res.json( a1 )

    } catch ( err ) {
        res.send( 'error' )
    }
} )


//  using delete
router.delete( '/:id', async ( req, res ) => {
    try {
        const help = await newschema.findById( req.params.id )
        newschema.name = req.body.name
        const a1 = await help.remove()
        res.json( a1 )

    } catch ( err ) {
        res.send( 'error' )
    }
} )

module.exports = router           //exporting required modules