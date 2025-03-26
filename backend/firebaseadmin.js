const admin = require("firebase-admin");
const serviceAccount = require("../backend/config/nodex-de76d-firebase-adminsdk-fbsvc-4df782ce0c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "nodex-de76d.appspot.com",
});

module.exports = admin;
