import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema( {

    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true
    },
    cover_url: {
        type: String,
        required: true,
    },
    date_release: {
        type: Date,
        required: true,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    nameArtist: {
        type: String 
    }


}, {} )

const albumsModel = mongoose.model (
    'albums',
    albumSchema
)

export default albumsModel