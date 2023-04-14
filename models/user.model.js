
const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    
    phone:{
        type:Number,
        required:true,
        unique: true,
    },
    
    phoneOtp:{
        type:Number,
        required:true,
    },
    isVerifyed:{
        type:Boolean
    }


  }
);

module.exports = model("User", userSchema);
