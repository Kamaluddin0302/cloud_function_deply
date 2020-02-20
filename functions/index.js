const admin = require("firebase-admin");
const functions = require("firebase-functions");
admin.initializeApp();

const newUser = require('./newUser')
const hello = require('./helloword')



module.exports = {
  newUser,
  hello: functions.https.onRequest(hello)
}

