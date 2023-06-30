const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema(
  {
    // ownerid,
    //   ownername,
    //   title,
    //   desc,
    ownerid: {
      type: String,
      required: true,
    },
    ownername: {
      type: String,
      required: [true],
    },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    like: {
      up: { type: Number, default: 0 },
      down: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
