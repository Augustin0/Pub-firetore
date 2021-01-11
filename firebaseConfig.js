const init =()=>{
const  admin = require("firebase-admin");
const  serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
return admin
}

module.exports={
    init
}