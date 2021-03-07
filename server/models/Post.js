const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = Schema(
  {
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    reactions: { type: Array },
    body: { type: String, unique: false, default: "" },
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

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
