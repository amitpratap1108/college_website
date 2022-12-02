const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/web_project",{
//     // useCreateIndex : true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(() =>{
//     console.log("connection successfull");
// }).catch((error) => {
//     console.log(error);
// })


const uri = 'mongodb://localhost:27017/webD';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection")
    })
}

connectWithDB()




// const URI = process.env.MONGODB_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true, 

// useUnifiedTopology: true 

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// });