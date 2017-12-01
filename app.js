const bodyParser = require('body-parser')
const db = require('./db');
const Book = require('./models/book')

const express = require('express')
const app = express()

// use body parse to parse json
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/api/book', (req, res) => {
	let book = req.body;
	Book.saveBook(book, (err, result) => {
			if (err) {
				throw err;
			}
			res.json(result)
	})
})

app.get('/api/book', (req, res) => {
	Book.findBook({}, (err, result) => {
			if (err) {
				throw err;
			}
			res.json(result)
	})
})

app.get('/api/book/:_id', (req, res) => {
	let query = {
		_id : req.params._id
	}
	
	Book.findBook(query, (err, result) => {
			if (err) {
				throw err;
			}
			res.json(result)
	})
})

app.put('/api/book/:_id', (req, res) => {
	let bookId = req.params._id;
	let book = req.body;
	Book.updateBook(bookId, book, {}, (err, result) => {
			if (err) {
				throw err;
			}
			res.json(result)
	})
})

app.delete('/api/book/:_id', (req, res) => {
	let query = {
		_id : req.params._id
	}
	Book.deleteBook(query, (err, result) => {
			if (err) {
				throw err;
			}
			res.json(result)
	})
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))