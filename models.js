'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const blogPostSchema = mongoose.Schema({
//     "title": {type: String, required: true},
//     "content": {type: String},
//     "author": {
//         "firstName": String,
//         "lastName": String
//     }
// });

const blogPostSchema = mongoose.Schema({
    author: {
      firstName: String,
      lastName: String
    },
    title: {type: String, required: true},
    content: {type: String},
    created: {type: Date, default: Date.now}
  });

blogPostSchema.methods.serialize = function() {
    return {
      id: this._id,
      author: this.authorName,
      content: this.content,
      title: this.title,
      created: this.created
    };
  };

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};

