const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = Schema(
  {
    reactions: { type: Array },
    body: { type: String, unique: false, default: "" },
    enum: ["Like", "Heart", "Care", "Laugh", "Angry", "Sad"],
    owner: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;
