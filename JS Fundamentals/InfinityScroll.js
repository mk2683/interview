/* <h1>Image Loader</h1>
<div id="image-container"></div>
<div id="loader" style="display: none;">Loading...</div> */

let page = 1;
let isLoading = false;

// Function to fetch images from the Unsplash API
function fetchImages(page) {
  const accessKey = "JKX4P_1URlHpvW_p4gNrWaN9AFBeeeG3I2sJgQesPsc";
  const perPage = 20; // Number of images per page

  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}&width=200&height=200`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById("image-container");

      // Append each image to the image container
      data.forEach((photo) => {
        const imgElement = document.createElement("img");
        imgElement.src = photo.urls.small;
        imageContainer.appendChild(imgElement);
      });

      isLoading = false;
      document.getElementById("loader").style.display = "none";
    })
    .catch((error) => console.error("Error fetching images:", error));
}

// Function to check if user has scrolled to the bottom of the page
function handleScroll() {
  if (isLoading) return;

  const threshold = 300; // Load more images when user is 300px above the bottom
  const scrolledToBottom =
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - threshold;

  if (scrolledToBottom) {
    isLoading = true;
    document.getElementById("loader").style.display = "block";
    page++;
    fetchImages(page);
  }
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial load of images
fetchImages(page);
