const library = [];
let bookId = 0;
const booksContainer = document.querySelector(".books-container");
const addButton = document.querySelector(".button");
const closeButton = document.querySelector(".close");
const bookForm = document.querySelector(".book-form");
const submitForm = document.querySelector('button[type="submit"');


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
  const id = document.createElement("div");
  const idInfo = document.createElement("div");
  idInfo.classList.add("idInfo");
  id.textContent = "ID: ";
  idInfo.textContent = book.id;
  id.append(idInfo);
  if (book.status) {
    read.textContent = "Read";
    read.classList.add("green");
  } else {
    read.textContent = "Not read";
    read.classList.add("red");
  }
  remove.textContent = "Remove";
  read.classList.add("read");
  remove.classList.add("remove");
  btns.classList.add("btns");
  btns.append(read);
  btns.append(remove);
  card.append(title);
  card.append(author);
  card.append(pages);
  card.append(id);
  card.append(btns);

  booksContainer.append(card);
}

function addBookToLibrary(book) {
  library.push(book);
  displayCard(book);
}
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = bookId;
  bookId += 1;
}

Book.prototype.switchReadBtn = function () {
  if (this.status) {
    this.status = false;
  } else this.status = true;
};

addButton.addEventListener("click", () => {
  bookForm.classList.toggle("hide");
});

closeButton.addEventListener("click", () => {
  bookForm.classList.toggle("hide");
});

submitForm.addEventListener(
  "click",
  (e) => {
    bookForm.classList.toggle("hide");
    e.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const yes = document.querySelector("#yes");
    let status;
    if (yes.checked) {
      status = true;
    } else {
      status = false;
    }
    const book = new Book(title.value, author.value, pages.value, status);
    title.value = "";
    author.value = "";
    pages.value = "";
    addBookToLibrary(book);
  },
  false
);

function switchReadBtn(node) {
  node.classList.toggle("green");
  node.classList.toggle("red");

  if (node.textContent === "Read") {
    node.textContent = "Not read";
  } else {
    node.textContent = "Read";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("read")) {
    switchReadBtn(e.target);
  }
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
    const bookIdCard =
      e.target.parentNode.parentNode.querySelector(".idInfo").textContent;
    const index = library.findIndex((el) => el.id === bookIdCard);
    library.splice(index,1);
  }
});
