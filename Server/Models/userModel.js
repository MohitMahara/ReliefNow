import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    googleId: {
      type: String,
    },

    authProvider: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    photoURL: {
      type: String,
    },


  },{ timestamps: true });


  export default mongoose.model("users", userSchema);
