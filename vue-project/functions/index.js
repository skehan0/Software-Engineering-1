const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase again!");
});

exports.isLoggedIn = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Not logged in");
});

exports.echo = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("The data passed in is " + request.query.data);
});

// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request, response) => {
    // 1. Receive comment data in here from user POST request
    // 2. Connect to our Firestore database
    cors(request, response, () => {
        console.log("Hello Again")
        const currentTime = admin.firestore.Timestamp.now();
        request.body.data.timestamp = currentTime;

        return admin.firestore().collection('comments').add(request.body).then(() => {
            response.json({data: "Saved in the database"});
        });
    });
});

exports.getcomments = functions.https.onRequest((request, response) => {

    cors(request, response, () => {
        // 1. Connect to our Firestore database
        console.log("The request made it in here");
        let myData = [];
        return admin.firestore().collection('comments').orderBy('data.timestamp').get().then((snapshot) => {

            if (snapshot.empty) {
                console.log('No matching documents.');
                response.json({data: {message : 'No data in database'}});
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id);
                myData.push(Object.assign(doc.data(), {id:doc.id}));
            });
            console.log(myData);

            // 2. Send data back to client
            response.json({data: myData});
        });
    });
});

exports.deletecomment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // deletes a comment using the id of the document
        console.log(request.query.id);
        admin.firestore().collection("comments").doc(request.query.id).delete().then(() => {
            response.json({data: "Document successfully deleted"});
        })
    });
});

exports.updatecomment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        console.log("This is the body" + request.body.data);
        return admin.firestore().collection('comments').doc(request.query.id).update(request.body.data.comment).then(() => {
                response.json({data: "Updated document in database"});
            });
    });
});

exports.securefunction = functions.https.onCall((data, context) => {
    cors(request, response, () => {
    // context.auth contains information about the user, if they are logged in etc.
    if(typeof context.auth === undefined)
    {
        // request is made from user that is logged in
        return "User is not logged in"
    }
    else
    {
        return "User is logged in"
    }
    })
});

exports.postusercomment = functions.https.onCall((data, context) => {
    cors(request, response, () => {
    // context.auth contains information about the user, if they are logged in etc.
    const currentTime = admin.firestore.Timestamp.now();
    data.timestamp = currentTime;

    if(typeof context.auth === 'undefined')
    {
        // request is made from an anonymous user
        return admin.firestore().collection('comments').add({data: data}).then(() => {
            return "Data saved in Firestore"
        });
    }
    else
    {
        data.uid = context.auth.uid;
        return admin.firestore().collection('comments').add({data: data}).then(() => {
            return "Data saved in Firestore"
        });
    }
    })
});

exports.deleteusercomment = functions.https.onCall((data, context) => {
    cors(request, response, () => {
    if(typeof context.auth === 'undefined')
    {
       // request is made from an anonymous user
        throw new functions.https.HttpsError('permission-denied', 'Anonymous users cannot delete comments');
    }
    else
    {
        return admin.firestore().collection('comments').doc(data.id).get().then((doc) => {
            if (!doc.exists) {
                // 1. Check if the document exists, throw error if not
                throw new functions.https.HttpsError('not-found', 'No comment found matching the id');
            } else if (doc.data().data.uid != context.auth.uid) {

                // 2. Check if the user owns the document, otherwise throw error
                throw new functions.https.HttpsError('permission-denied', 'You do not have sufficient permissions to delete this comment');
            } else {
                // 3. If the user created the document then delete it
                return doc.ref.delete().then(() => {
                    return 'Document successfully deleted'
                });
            }
        });
    }
})
});