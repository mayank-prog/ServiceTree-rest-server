
const { model, Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    user_id:{
        type:String,
        required:true,
        unique: true,
    },
    complete_address:{
        type : String,
        required:true,
    }, 
    land_Mark:{
        type : String,
    },
    city:{
       type : String,
       required:true,
    }, 
    state:{
        type : String,
        required:true,
    },
    zip:{
        type : String,
        required:true,
    }, 
  }
);

module.exports = model("Address", addressSchema);
