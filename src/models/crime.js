const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    //mapeo de la base de datos
    ID:Number,
    CaseNumber: String,
    Date: String,
    Block: String,
    IUCR: Number,
    PrimaryType:String,
    Description:String,
    LocationDescription:String,
    Arrest:Boolean,
    Domestic:Boolean,
    Beat: Number,
    District:Number,
    Ward:Number,
    CommunityArea: Number,
    FBICode: Number,
    XCoordinate:String,
    YCoordinate:String,
    Year: Number,
    UpdatedOn: Number,
    Latitude: String,
    Longitud: String,
    Location: String,

});



module.exports = mongoose.model('crimes', userSchema)