//./models/Post.js
// grab the things we need
"use strict";
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      User = require('./User');

// create a schema
//The allowed SchemaTypes are:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
var postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    shopname: { type: String },
    address: { type: String},
    phone: { type: String, required: true},//,match: /[0-9a-zA-Z_-]/
    message: {type: String, required: true, min: 5}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});




postSchema.methods.time = time=> {
    return moment(time).format('L');
};

postSchema.methods.processPost = post=>{
    return {
        _id:post._id,
        user_id: post.user_id,
        tag_id: post.tag_id,  //an array   
        tags: tagsArray,//array with all post tags   
        author: post.author,
        category: post.category,
        title: post.title,
        intro: post.intro,
        content: post.content,  
        pv: post.pv,
        like: post.like,
        great: post.great,
        created_at: post.time(post.created_at),
        updated_at: post.time(post.updated_at),            
    };    

};


// make this available to our users in our Node applications
module.exports = mongoose.model('Suggestion', postSchema);