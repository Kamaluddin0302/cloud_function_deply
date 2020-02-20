const admin = require("firebase-admin");
const functions = require("firebase-functions");
admin.initializeApp();

const newUser = require('./newUser')
const hello = require('./helloword')



module.exports = {
  newUser,
  hello: functions.https.onRequest(hello)
}


// exports.pushnotification = functions.database.ref("user")
//   .onDelete(event => {
//     var request = event.data.val();
//     var apyload = {
//       data: {
//         username: "Kamal uddin",
//         email: "kamal@gmail.com"
//       }
//     };

//     firebase.database.ref("/update").add({name: "knekfnk"})
//   });
    // admin
    //   .messaging()
    //   .sendToDevice(request.token, payload)
    //   .then(res => console.log("Successfully sent message : ", res))
    //   .catch(error => console.log("Error sending message : . ", error));

// const usersRef = admin.firestore().collection('fl_users');
// // When a user is created, register them with Stripe
// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
//     const customer = await stripe.customers.create({ email: user.email });
//     dashboardRef.where('uid', '==', user.uid).get()
//         .then(querySnap => 
//             dashboardRef.doc(querySnap.docs[0].id).update({ customer_id: customer.id })
//         )
//     .catch(error => console.log("Error sending message : . ", error));
// });
