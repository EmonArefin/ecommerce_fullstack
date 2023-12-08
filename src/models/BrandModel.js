const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    brandName: {type:String, unique:true, required:true},
    brandImg: {type:String, required:true}
}, {versionKey: false, timestamps: true});

const BrandModel = mongoose.model("brands", DataSchema);

module.exports = BrandModel;