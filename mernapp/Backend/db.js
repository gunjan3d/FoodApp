const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GFood:GFood@cluster0.uopgu7q.mongodb.net/GFood?retryWrites=true&w=majority';
const mongoURLL = 'mongodb+srv://GFood:GFood@cluster0.uopgu7q.mongodb.net/GFood?retryWrites=true&w=majority';

const mongoDB = async () => {

    mongoose.set("strictQuery",false);
    mongoose.connect(mongoURLL, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("-------", err)

        else {
        
            console.log("conennected");
            const fetched_data =   mongoose.connection.db.collection("foodimtems");
            await fetched_data.find({}).toArray(function(err,data){
                if(err) console.log("--------------",err);
                else
                {
                    console.log();
                }
            })
        }
    });
};

module.exports = mongoDB;