'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/BlogPosts';
exports.PORT = process.env.port || 8080;