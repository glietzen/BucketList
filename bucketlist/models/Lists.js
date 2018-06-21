// REQUIRE PACKAGES
// ===============================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// CREATE SCHEMA
// ===============================
let ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
});

let List = mongoose.model("List", ListSchema);


// EXPORT
// ===============================
module.exports = List;