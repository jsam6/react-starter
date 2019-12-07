const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Create Schema 
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: [true, "Email already exist"] ,required: [true,"Email required"] },
    first_name: { type:String , required: [true,"First Name is required"] },
    last_name: { type:String , required: [true,"Last Name is required"] },
    mobile_number: { type: Number , required: [true,"Mobile Number is required"] },
});

// Apply the uniqueValidator plugin to userSchema.
UserSchema.plugin(uniqueValidator);

const User = module.exports = mongoose.model('users', UserSchema);


module.exports.getUserByEmail = function(email) {
    const query = {
        email:email
    }
    User.findOne(query);
}

module.exports.addUser = function(newUser, callback) {
    newUser.save(callback);
}
