import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema ({

    title: {
        type: String,
        required:[true,"El titulo del evento es obligatorio"],
        trim: true
    },
    description: {
        type: String,
        trim:true
    },
    Date: {
        type: Date,
        required:[true,"La fecha del evento es obligatorio"],
        trim:true,
        default:Date.now
    },
}, {
    timestamps: true,
    versionKey: false
} );

const eventsModel = mongoose.model(
    "events",
    eventSchema
);


export default eventsModel;