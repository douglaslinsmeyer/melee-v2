import mongoose from 'mongoose';

export default mongoose.model('Bot', new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        max: 100,
    },
    url: {
        type: String, 
        lowercase: true,
        required: true,
    },
    avatar: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
}, { timestamps: true, }));