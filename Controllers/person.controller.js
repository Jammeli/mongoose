const Persons = require("../Models/PersonModel");
const AddPerson = async (req, res) => {
  try {
          await Persons.create(req.body);
          res.status(201).json({ message: "Person added with success" });
    
  } catch (error) {
    console.log(error.message);
  }
};
const FindAllPersons = async (req, res) => {
  try {
          const data = await Persons.find();
          res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingllePerson = async (req, res) => {
  try {
          const data = await Persons.findById({ _id: req.params.id });
          res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingllePersonByFoodAndUpdate = async (req, res) => {
  try {
    const data = await Persons.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      favoriteFoods.push(req.body),
      { new: true }
    );
    res.status(201).json(data);
  
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingllePersonByFood = async (req, res) => {
  try {
          const data = await Persons.findOne({favoriteFoods : req.params.food});
          res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports={AddPerson,FindAllPersons,FindSingllePerson, FindSingllePersonByFood, FindSingllePersonByFoodAndUpdate}