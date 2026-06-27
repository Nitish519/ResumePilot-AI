const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {

        console.error("❌ Database Connection Failed");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;



// // const mongoose = require("mongoose");

// // const connectDB = async () => {
// //     try {
// //         const conn = await mongoose.connect(process.env.MONGO_URI);

// //         console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
// //     } catch (error) {
// //         console.error("❌ Database Connection Failed");
// //         console.error(error.message);
// //         process.exit(1);
// //     }
// // };

// // module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         console.log("Connecting...");

//         const conn = await mongoose.connect(process.env.MONGO_URI);

//         console.log("Connected");
//         console.log(conn.connection.host);

//     } catch (err) {
//         console.log(err);
//     }
// };

// module.exports = connectDB;