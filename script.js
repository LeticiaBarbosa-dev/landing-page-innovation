function handleSearch() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const result = document.getElementById("searchResult");
  if (searchInput) {
    result.textContent = `Você buscou por: '${searchInput}'`;
  } else {
    result.textContent = "";
  }
}



let currentIndex = 0;
const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("carousel-dots");

function getSlideWidth() {
  const card = carousel.querySelector("div");
  return card.offsetWidth + 16;
}

function updateDots() {
  const totalSlides = Math.ceil(carousel.scrollWidth / carousel.clientWidth);
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = `w-2 h-2 rounded-full cursor-pointer ${i === currentIndex ? "bg-[#303030]" : "bg-[#838383]"
      }`;
    dot.addEventListener("click", () => {
      currentIndex = i;
      carousel.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
      updateDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function nextSlide() {
  const slideWidth = getSlideWidth();
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if ((currentIndex + 1) * slideWidth <= maxScroll) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
  }
}

function prevSlide() {
  const slideWidth = getSlideWidth();
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
  }
}

window.addEventListener("resize", () => {
  const slideWidth = getSlideWidth();
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
});

// Inicializa os dots ao carregar
window.addEventListener("load", updateDots);

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("menu-backdrop");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  backdrop.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  backdrop.classList.add("hidden");
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
