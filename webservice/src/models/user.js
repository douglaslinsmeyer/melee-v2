import mongoose from 'mongoose';

export const userRoles = {
    USER: 'user',
    ADMINISTRTOR: 'admin',
};

export default mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    enabled: {
        type: Boolean,
        default: true,
    },
    roles: [{ 
        type: String,
        enum: [userRoles.USER, userRoles.ADMINISTRTOR,],
    },],
}, { timestamps: true, }));