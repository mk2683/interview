document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  function showSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function handleNavigation(event) {
    const direction = event.target.getAttribute("data-direction");
    if (direction === "next") {
      showSlide(currentIndex + 1);
    } else if (direction === "prev") {
      showSlide(currentIndex - 1);
    }
  }

  document.querySelectorAll(".nav").forEach((button) => {
    button.addEventListener("click", handleNavigation);
  });

  // Auto slide every 3 seconds
  //   setInterval(() => {
  //     showSlide(currentIndex + 1);
  //   }, 3000);
});
