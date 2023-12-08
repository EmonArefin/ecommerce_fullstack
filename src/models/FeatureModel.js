const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    img: {type:String, required:true},
}, {versionKey: false, timestamps: true});

const FeatureModel = mongoose.model("features", DataSchema);

module.exports = FeatureModel;