import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import { apiRouter } from './api/apiRouter.js'
import { formRouter } from './form/formRouter.js'

/*
This is the entry point of our application.
We use a library called Express to set up our web server.
*/

// Create the app
const app = express()

// Set the port we use to receive incoming web traffic.
// For development, we use port 3000.
const port = process.env.PORT || 3000

// Find path of client directory
const getClientDirectory = () => {
    const currentModuleFile = fileURLToPath(import.meta.url)
    const currentModuleDirectory = path.dirname(currentModuleFile)
    return path.join(currentModuleDirectory, '../../client')
}

// Strips ".html" from all urls
app.use('/', (req, res, next) => {
    req.url = req.url.replace(/\.html/, '')
    next()
})

// All files in the client directory available at "<siteurl>/<filename>"
app.use('/', express.static(getClientDirectory(), { extensions: ['html'] }))

// Forms post to the same path as their page
app.use('/', formRouter)

// API endpoints available at "<siteurl>/api/<endpoint>"
app.use('/api', apiRouter)

// Receive incoming traffic
app.listen(port, () => {
    console.log(`Yahtzee app listening at http://localhost:${port}`)
})
