const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require: true
        },
        pass:{
            type:Number,
            require:true
        },
        email:{
            type:String,
            require:true
        }
      
    }
)
const UserModel=mongoose.model("registerUserDetails",UserSchema)// detail is name of collection where data is enter if(already colletion exist for other schema the of random name with end s is create )
module.exports=UserModel