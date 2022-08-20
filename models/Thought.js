const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
    thoughtText: {Type: String, required: true, maxlength: 280, minlength: 1},
    createdAt: {Type: Date, default: Date.now},
    userName: {Type: String, required: true},
    ractions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

const reactionSchema = new mongoose.Schema({
    reactionId: [{type: mongoose.Schema.type.ObjectID, ref: 'thoughts'}],
    reactionBody: {type: String, required: true, maxlength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: new Date}
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;