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
export default mongoose.model('show', showSchema);