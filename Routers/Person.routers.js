const express=require('express')
const { AddPerson, FindAllPersons, FindSingllePerson, UpdatePerson, DeletePerson, FindSingllePersonByFood, FindSingllePersonByFoodAndUpdate } = require('../Controllers/person.controller');

const router = express.Router()

//Find all persons
router.get('/liste',FindAllPersons)
//Find single person By ID
router.get('/person/:id', FindSingllePerson)

//Find single person By Food
router.get('/personF/:food', FindSingllePersonByFood)


//Find single person And Update
router.put('/personFA/:id', FindSingllePersonByFoodAndUpdate)
// Add person
router.post('/AddPerson', AddPerson)
// Delete person
//router.delete('/delete/:id',DeletePerson)
//Update person
//router.put('/update/:id', UpdatePerson) 

module.exports = router;
