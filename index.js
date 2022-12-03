let searchBtn = document.getElementById("search-btn");
let searchField = document.getElementById("search-field");
let searchInput = document.getElementById("search-input");
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
