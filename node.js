const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.request(express.json());
const router = express.Router();

async function main() {
  await mongoose.connect("mongodb://localhost:27017/movie");
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
        type:required,
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
  const createdperson = await personModel.create({
    name: name,
    age: age,
    city: city,
  });
  res.json(createdperson);
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
