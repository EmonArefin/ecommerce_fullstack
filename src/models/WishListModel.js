const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    productID: {type:mongoose.Schema.Types.ObjectId, required:true},
    userID: {type:mongoose.Schema.Types.ObjectId, required:true}
    
}, {versionKey: false, timestamps: true});

const WishListModel = mongoose.model("wishes", DataSchema);

module.exports = WishListModel;