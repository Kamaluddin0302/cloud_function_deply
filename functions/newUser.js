const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore()
exports.nweUser = functions.firestore.document('/user/{id}').onCreate((data, context) => {
    let id = context.params.id
    return db.collection("userData").doc(id).set({
        name: "unknown name",
        id: id
    })
})