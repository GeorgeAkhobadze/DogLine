let searchBtn = document.getElementById("search-btn");
let searchField = document.getElementById("search-field");
let searchInput = document.getElementById("search-input");
let cardContainer = document.getElementById("swipe-cards-container");
let scrollLeftBtn = document.getElementById("scroll-left-btn");
let scrollRightBtn = document.getElementById("scroll-right-btn");
// Search Field JS
searchBtn.onclick = function () {
  searchField.style.width = "222px";

  if (searchField.offsetWidth == 44) {
    searchField.style.width = "222px";
    searchInput.style.display = "block";
    setTimeout(searchInput.focus(), 500);
  } else {
    searchField.style.width = "44px";
    searchInput.style.display = "none";
  }
};

// Card Scroll JS
scrollLeftBtn.onclick = function () {
  cardContainer.scrollLeft -=
    cardContainer.scrollWidth - cardContainer.offsetWidth;
};

scrollRightBtn.onclick = function () {
  cardContainer.scrollLeft +=
    cardContainer.scrollWidth - cardContainer.offsetWidth;
  // console.log(cardContainer.scrollRight);
};
// console.log(cardContainer.scrollWidth);
