const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// setup routes...
app.get('/test', (req, res) => {
    res.send('Wow, it works.')
})

app.get('/Another-one', (req, res) => {
    res.send('This one works, too!')
})
exports.api = functions.https.onRequest(app)

exports.helloThere = functions.https.onRequest((req, res) => {
    res.send('Hello there Firebase Cloud user!')
})

app.get('/', (req, res) => {
    res.send('sending all the changes!')
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
