
const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const router = express.Router()
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Todo-project');
}  
main() 
.then(()=>console.log("connected to data base"))
.catch((error)=>console.log("error"))
const todoschema=mongoose.Schema({
    text:String,
    status:Boolean
})
const todoModel=mongoose.model("todo",todoschema)

router.get("/",(req,res)=>{
    res.send("done") 
})
router.post("/todo",async(req,res)=>{
    const {status,text}=req.body
     const created= await todoModel.create({text:text,status:status})
     res.json(created)
})

router.get("/find",async(req,res)=>{
    const found=  await todoModel.find({status:true})
    res.json(found) 
})
router.get("/delete",async(req,res)=>{
    const del =  await todoModel.findOneAndDelete({status:false})
    res.json(del) 
})

// router.patch("/update",async(req,res)=>{
//     const {text,tobeupdated}=req.body
//     const updated=  await todoModel.find({text},{texttobeupdated:})
//     res.json(updated) 
// })
router.get("/todo/:status",async (req,res)=>{
   let {status}=req.params
   status=="completed"? status=true:status=false
   const todosli=await todoModel.find({status})
   if (status) {
    res.json({
        sucess:true,
        todosli
    })
return
    }
    res.json({
        sucess:false,
        todosli
    })
   }
)
// router.get("/todo/incompleted",(req,res)=>{
//     res.send("done") 
// })

app.use(router)
app.listen(5000)  
