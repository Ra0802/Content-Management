const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');
const PostSchema = new Schema({

    
    title: {
        type: String,
        required: true

    },

    status: {
        type: String,
        default: 'public',
        
    },

    allowComments: {
        type: Boolean,
        required: true,
        
    },

    body: {
        type: String,
        required: true,
        
    },


    file: {
        type: String,
        
        
    }


});

PostSchema.plugin(URLSlugs('title'));
module.exports = mongoose.model('posts', PostSchema);