const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(
            //process.env.DB,
            "mongodb+srv://phr:thai2011@cluster0.2eka44x.mongodb.net/xsmb?retryWrites=true&w=majority",
                        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Data Base Error');
    }
}

module.exports = { dbConnection }