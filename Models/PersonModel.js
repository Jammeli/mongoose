const mongoose = require('mongoose')
const UserModel = new mongoose.Schema ( {
    name: {
        type:String,
        required : true
    },
    age : {
        type:Number,
        required: true
    },
    favoriteFoods : {
        type : Array,
    }
})
module.exports = mongoose.model('Person', UserModel) 