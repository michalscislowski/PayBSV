const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const itemSchema = new Schema({
    email: String,
    item: String,
    status: String,
    linkurl: String,
    mbuserid: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);