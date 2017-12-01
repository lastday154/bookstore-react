var mongoose = require('mongoose');

var schema = new mongoose.Schema({ title: 'string', author: 'string' });
var Book = mongoose.model('Book', schema);

module.exports.saveBook = (book, callback) => {
	Book.create(book, callback);
}

module.exports.findBook = (query, callback) => {
	Book.find(query).exec(callback);
}

module.exports.updateBook = (query, book, options, callback) => {
	Book.findOneAndUpdate(query, book, options, callback);
}

module.exports.deleteBook = (query, callback) => {
	Book.find(query).remove().exec(callback);
}
