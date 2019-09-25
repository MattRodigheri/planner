const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  id: String,
  sunday: Array,
  monday: Array,
  tuesday: Array,
  wednesday: Array,
  thursday: Array,
  friday: Array,
  saturday: Array
});

module.exports = mongoose.model("Data", DataSchema);
