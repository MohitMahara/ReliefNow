import mongoose from "mongoose";

const rescueReqSchema = new mongoose.Schema({
  fullName : {
    type : String,
    required: true,
  },

  phone: {
    type: String,
  },

  emergencyLvl : {
    type : String
  },

  disasterType : {
    type : String
  },

  description : {
    type : String
  },

  location : {
     type : String,
     required : true
  }


}, {timestamps : true})


export default mongoose.model("rescueReqs", rescueReqSchema);