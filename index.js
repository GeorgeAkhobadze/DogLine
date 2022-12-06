let searchBtn = document.getElementById("search-btn");
let searchField = document.getElementById("search-field");
let searchInput = document.getElementById("search-input");
let cardContainer = document.getElementById("swipe-cards-container");
let scrollLeftBtn = document.getElementById("scroll-left-btn");
let scrollRightBtn = document.getElementById("scroll-right-btn");
let modal = document.querySelector("dialog");
let closeBtn = document.querySelector(".js-close-modal");
let modalPackage = document.getElementsByClassName("modal__content-package");
let packageNextBtn = document.getElementById("package-select-btn");
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
};

// Close Modal JS
closeBtn.onclick = () => {
  modal.close();
};

document.onclick = (e) => {
  if (!e.target.closest(".modal__content") && !e.target.closest("button")) {
    modal.close();
  }
};

var x = document.getElementsByClassName("modal__content-package");
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener(
    "click",
    function () {
      var selectedEl = document.querySelector(".package-selected");
      // If there was a selected element which is not this
      packageNextBtn.removeAttribute("disabled");
      if (selectedEl && selectedEl !== this) {
        selectedEl.classList.remove("package-selected");
      }
      // Toggle this
      this.classList.toggle("package-selected");
    },
    false
  );
}

packageNextBtn.onclick = () => {
  document.getElementById("modal__content-packages").style.display = "none";
  document.getElementById("select-btn-container").style.display = "none";
  document.getElementById("modal__title").innerHTML = "Checkout - Quick Wash";
  document.getElementById("modal").style.width = "68vw";
  document.getElementById("modal-billing").style.display = "flex";
};
