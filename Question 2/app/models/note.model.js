var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    userId: String,
    Name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);
