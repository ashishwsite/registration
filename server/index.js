const express=require('express')
const mongoose=require('mongoose')
const  cors=require('cors')
const UserModel=require('./models/UserScema')
// mongoose.connect("mongodb+srv://ashish:12345@cluster0.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0") // it automatically db and colliction which we define in vs code
const port =1000
const app=express()// intaillisde name of server
// app.use(cors(
//     {
//         origin:["https://registrationserver.vercel.app/"],
//         methods:["POSt","GET"],
//         credentials:true
//     }
// ))
// app.use(cors())
app.use(express.json())// frontent se data ko json me convert karega
mongoose.connect("mongodb+srv://ashish:12345@cluster0.g45nrog.mongodb.net/dbYousafe?retryWrites=true&w=majority&appName=Cluster0")
app.get("/",(req,res)=>{
res.json("hello")
})
app.get("/getUsers",(req,res)=>{
    UserModel.find({}).then(function(detail){// detail is response from .find() method from db or //its is dp=ocument of collection
        res.json(detail)
    }).catch(function(err){
        res.json(err)
    })
})
app.post('/createUser',async(req,res)=>{// automatically create new collition in test database and fill data as document
    var bodyData=req.body
    console.log("req body data ",bodyData)
  const  user = await UserModel.create({
        name: req.body.name,
        pass: req.body.pass,
        email:req.body.email
      });
   
    return res.json("success")
})
app.listen(port,()=>{
    console.log(`server listen on port  http://localhost:${port}`) // http help that its is link
}
    
)