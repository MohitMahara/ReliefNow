import mongoose from "mongoose";

const volunteerApplicationSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    
    phone: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },
    
    skills: {
        type : [],
        required: true,
    },
    
    canTravel : {
        type : String,
    },

    location: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("volunteerApplications", volunteerApplicationSchema);