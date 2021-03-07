const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    reactions: { type: Array },
    body: { type: String, unique: false, default: "" },
    post: { ref: "Post", required: true, type: Schema.Types.ObjectId },
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

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment
