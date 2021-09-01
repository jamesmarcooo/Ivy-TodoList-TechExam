const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            //Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};