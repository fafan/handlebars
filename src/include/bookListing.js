module.exports = function getBookListing() {
	var bookListingTemplate = require("../template/book-listing.handlebars")

	return bookListingTemplate({
		username: "test",
		info: "Your books are due next Tuesday",
		books: [
			{ title: "A book", synopsis: "With a description" },
			{ title: "Another book", synopsis: "From a very good author" },
			{ title: "Book without synopsis" }
		]
	})
}
