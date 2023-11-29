// const express = require("express")
// const app = express()
// const cors = require("cors")
// const mongoose = require("mongoose")
// app.use(express.json())
// const router = express.Router()
// app.use(cors())
// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Todo-project');
// }  
// main() 
// .then(()=>console.log("connected to data base"))
// .catch((error)=>console.log("error"))
// const todoschema=mongoose.Schema({
//     text:String,
//     status:Boolean
// })
// const todoModel=mongoose.model("todo",todoschema)

// router.get("/",(req,res)=>{
//     res.send("done") 
// })
// router.post("/todo",async(req,res)=>{
//     const {status,text}=req.body
//     // also we can do by another method 
//     // const created= await new todoModel({text:text,status:status})
//     //  created.save()
//       const created = await  todoModel.create({text:text,status:status}) 
//      res.json(created)
// })

// router.get("/find",async(req,res)=>{
//     const found=  await todoModel.find({status:true})
//     res.json(found) 
// })
// router.get("/delete",async(req,res)=>{
//     const del =  await todoModel.findOneAndDelete({status:false})
//     res.json(del) 
// })

// router.patch("/todo",async(req,res)=>{
//     const {id,status}=req.body
//     const updated=  await todoModel.findById(id)
//     if (created) {
//         created.status=status
//         created.save()
        
    
//     res.json(updated)}
//     else{
//         res.status(404).json({
//             message:"notfound"
//         })
//     } 
// })


// router.get("/todo/:status",async (req,res)=>{
//    let {status}=req.params
//    status=="completed"? status=true:status=false
//    const todosli=await todoModel.find({status})
//    if (status) {
//     res.json({
//         sucess:true,
//         todosli
//     })
// return
//     }
//     res.json({
//         sucess:false,
//         todosli
//     })
//    }
// )
// // router.get("/todo/incompleted",(req,res)=>{
// //     res.send("done") 
// // })

// app.use(router)
// app.listen(5000)  

//========================================================================previous work==========
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const router = express.Router();

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movie");
}
main()
  .then(() => console.log("Connected to Data Base"))
  .catch((error) => console.log("error"));

//=========================================VALIDATION===========================================//

const personschema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    minLength: [3, "name is not allowed"],
  },
  city: String,
  age: { type: Number, min: [3, "early age"] }, //in array first one is critaria/condition and second one is message to print
});
const movieschema = mongoose.Schema({
  name: { type: String,
     required: [true, "please enter name"],
    movielength:{
        type:Number,
        max:[180,"movie is too long"],
        min:[50,"movie is too short"]
    } }, 
  city: String,
  category: String,
  minAge: { type: Number,
     min: [18, "you are too young to watch this movie"] },
  maxAge: { type: Number, 
    max: [65, ""] },
});
const personModel = mongoose.model("person", personschema);
const movieModel = mongoose.model("movies", movieschema);

router.get("/findperson", async (req, res) => {
  const foundperson = await personModel.find();
  res.send(foundperson);
});
router.get("/findmovie", async (req, res) => {
  const foundmovie = await movieModel.find();
  res.send(foundmovie);
});

router.post("/createpeson", async (req, res) => {
  const { name, age, city } = req.body;
  if (!name || !age || !city) {
    res.status(401).json({
        success:false,
        message:"please enter complete data"
    })
  }
  else{
    const createdperson = await personModel.create({
        name: name,
        age: age,
        city: city,
        
      });
      res.json(createdperson);
  }

});
router.post("/createmovie", async (req, res) => {
  const { name, category, minAge, maxAge } = req.body;
  const createdmovie = await movieModel.create({
    name: name,
    category: category,
    minAge: minAge,
    maxAge: maxAge,
  });
  res.json(createdmovie);
});

router.delete("/deleteperson", async (req, res) => {
  const delperson = await personModel.findByIdAndDelete();
  res.json(delperson);
});
router.delete("/deletemovie", async (req, res) => {
  const delmovie = await movieModel.findByIdAndDelete();
  res.json(delmovie);
});

router.patch("/updateperson", async (req, res) => {
  const { id, name, age, city } = req.body;
  const updatedperson = await personModel.findById(id);
  if (updatedperson) {
    updatedperson.name = name;
    updatedperson.age = age;
    updatedperson.city = city;
    updatedperson.save();
    res.json(updatedperson);
  } else {
    res.send().json({
      message: "not found",
    });
  }
});
router.patch("/updatemovie", async (req, res) => {
  const { id, name, age, city } = req.body;
  const updatedmovie = await personModel.findById(id);
  if (updatedmovie) {
    updatedmovie.name = name;
    updatedmovie.maxAge = maxAge;
    updatedmovie.minAge = minAge;
    updatedmovie.category = category;
    updatedmovie.save();
    res.json(updatedmovie);
  } else {
    res.send().json({
      message: "not found",
    });
  }
});

app.use(router);
app.listen(5000);