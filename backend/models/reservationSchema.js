import mongoose from "mongoose";    
import validator from "validator";

const reservationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First name is required"],     
        minLength: [3, "First name must have at least 3 characters"], 
        maxLength: [30, "Too long"]
      },

      firstName: {
        type: String,
        required: [true, "Lasat name name is required"],     
        minLength: [3, "Last name must have at least 3 characters"], 
        maxLength: [30, "Too long"]
      },

    email:{
        type:String,
        required:[true,"Email is required!"],
        validate:[validator.isEmail,"Please enter a valid email!"]
    },

    phone:{type:String,
        required:[11,"phone number must contain at least 11 digite!"],
        maxLength:[11,"phone number must contain at least 11 digite!"]
    },

    time:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

});

export const Reservation = mongoose.model("Reservation",reservationSchema);