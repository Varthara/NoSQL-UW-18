const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true, trim: true},
        email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]}, 
        thoughts: [{type: Schema.type.ObjectId, ref: 'thought'}],
        friends: [{type: Schema.type.ObjectId, ref: 'user'}],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false
    },

);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;