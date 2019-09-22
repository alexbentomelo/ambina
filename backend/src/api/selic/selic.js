const restful = require("node-restful");
const mongoose = restful.mongoose;

const selicSchema = new mongoose.Schema({
  data_referencia: { type: String, required: true },
  estimativa_taxa_selic: { type: Number, required: true }
});

const selicCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  soma: [selicSchema]
});

module.exports = restful.model("SelicCycle", selicCycleSchema);
