// ----------------------------------------------    Nav a smooth ejimas     ---------------------------------------

const menuBars = document.querySelectorAll("#header-rigth-nav a");

const handleClick = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

menuBars.forEach((menuBar) => {
  menuBar.addEventListener("click", handleClick);
});

// ---------------------------------------------- Tabs && Reviews   ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Tabs
  const featureButtons = document.querySelectorAll(".feature-button-box");
  const contentBoxes = document.querySelectorAll(".box");

  featureButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      contentBoxes.forEach((box) => box.classList.add("not-displayed"));
      featureButtons.forEach((btn) => btn.classList.remove("active"));
      contentBoxes[index].classList.remove("not-displayed");
      featureButtons[index].classList.add("active");
    });
  });

  // Reviews

  const reviewBoxes = document.querySelectorAll(".review-box");
  const pagination = document.querySelector(".pagination");

  const reviewsPerPage = 3;
  let currentPage = 0;
  const totalReviews = reviewBoxes.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  function addPagination() {
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active-dot");
      dot.setAttribute("data-index", i);
      pagination.appendChild(dot);
    }

    pagination.addEventListener("click", function (event) {
      if (event.target.classList.contains("dot")) {
        const pageIndex = parseInt(event.target.getAttribute("data-index"));
        showReviews(pageIndex);
      }
    });
  }

  function showReviews(pageIndex) {
    currentPage = pageIndex;
    const startIndex = pageIndex * reviewsPerPage;
    const endIndex = Math.min(startIndex + reviewsPerPage, totalReviews);

    reviewBoxes.forEach(function (reviewBox, index) {
      if (index >= startIndex && index < endIndex) {
        reviewBox.style.display = "block";
      } else {
        reviewBox.style.display = "none";
      }
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot, index) {
      if (index === pageIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  addPagination();
  showReviews(currentPage);

  const reviewContainer = document.querySelector(".review-container");
  reviewContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("dot")) {
      const newIndex = parseInt(event.target.getAttribute("data-index"));
      showReviews(newIndex);
    }
  });
});

// ---------------------------------------------- Burger   ---------------------------------------

const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.getElementById("header-rigth-nav");

menuBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuContainer.style.display === "none") {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
}
