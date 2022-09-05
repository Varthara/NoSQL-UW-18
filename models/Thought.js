const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: [{ type: Schema.Types.ObjectId, ref: 'thoughts'}],
        reactionBody: {type: String, required: true, maxlength: 280},
        username: {type: String, required: true},
        createdAt: {type: Date, default: new Date}
    }
)
const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
        createdAt: {type: Date, default: new Date},
        username: {type: String, required: true},
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;