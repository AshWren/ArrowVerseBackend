<<<<<<< HEAD
import mongoose, { Schema } from 'mongoose';

//Define show schema
var showSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    season: Number,
    episode: Number, 
    show: String,
    showIcon: String,
    showNum: Number,
    universeNum: Number,
    airDate: String,
    synopsis: String,
    watched: Boolean,
    rating: Number,
});

//Export Mongoose model
=======
import mongoose, { Schema } from 'mongoose';

//Define show schema
var showSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    season: Number,
    episode: Number, 
    show: String,
    showIcon: String,
    showNum: Number,
    universeNum: Number,
    airDate: String,
    synopsis: String,
    watched: Boolean,
    rating: Number,
});

//Export Mongoose model
>>>>>>> 9374ee941516a47c0e9dcfc6f11e4acff2ee717a
export default mongoose.model('show', showSchema);