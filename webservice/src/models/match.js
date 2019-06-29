import mongoose, { Schema } from 'mongoose';

const roundActionSchema = new Schema({
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bot',
    },
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bot',
    },
    description: String,
    timestamp: Date,
});

const roundSchema = new Schema({
    number: Number,
    actions: [roundActionSchema,],
    started: Date,
    finished: Date,
});

export default mongoose.model('Match', new Schema({
    combatants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bot',
    },],
    rounds: [roundSchema,],
    started: Date,
    finished: Date,
    validActions: [{
        type: String,
        enum: []
    }],
}, { timestamps: true, }));