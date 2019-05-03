const Book = require('../models/book');

exports.getBooks = (req, res) => {
    Book.find({}, (err, allBooks) => {
    if (err) {
        return res.status(422).send(err);
    }
  
        return res.json(allBooks);
    });
};

exports.saveBook = (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);

    book.save((err, createdBook) => {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(createdBook);
    });
};
