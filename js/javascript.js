const library = [];
const booksContainer = document.querySelector(".books-container");

function displayCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("div");
  const titleInfo = document.createElement("div");
  title.textContent = "Title: ";
  titleInfo.textContent = book.title;
  title.append(titleInfo);
  const author = document.createElement("div");
  const authorInfo = document.createElement("div");
  author.textContent = "Author: ";
  authorInfo.textContent = book.author;
  author.append(authorInfo);
  const pages = document.createElement("div");
  const pagesInfo = document.createElement("div");
  pages.textContent = "Pages: ";
  pagesInfo.textContent = book.pages;
  pages.append(pagesInfo);
  const btns = document.createElement("div");
  const read = document.createElement("div");
  const remove = document.createElement("div");
  read.textContent = "Read";
  remove.textContent = "Remove";
  read.classList.add("read");
  remove.classList.add("remove");
  btns.classList.add("btns");
  btns.append(read);
  btns.append(remove);
  card.append(title);
  card.append(author);
  card.append(pages);
  card.append(btns);
  booksContainer.append(card);
}
function displayLibrary() {
  library.forEach((el) => displayCard(el));
}
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const alo = new Book("lol", "lol", 34);
library.push(alo);

displayLibrary(library);
