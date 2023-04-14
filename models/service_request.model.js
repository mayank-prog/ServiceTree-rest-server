
const { model, Schema } = require("mongoose");

const service_requestSchema = new Schema(
  {
    user_id:{
        type:String,
        required:true
    },
    request_for:{
        type : String,
        required:true,
    }, 
    date_of_appointment:{
        type : String,
        required:true,
    },
    date_of_served:{
        type : String,
        required:true,
    },
    description:{
       type : String,
    }, 
    service_status:{
        type : String,
        required:true,
    },
    service_category:{
        type : String,
    }, 
  }

  
);

module.exports = model("service_request", service_requestSchema);

