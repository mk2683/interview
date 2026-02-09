<div class="gallery">
  <img src="https://via.placeholder.com/150" alt="Thumbnail" />
  <img src="https://via.placeholder.com/150/111" alt="Thumbnail" />
  <img src="https://via.placeholder.com/150/222" alt="Thumbnail" />
</div>

<div id="lightbox" class="lightbox">
  <span class="close">&times;</span>
  <img id="lightbox-img" />
</div>

.gallery img {
  width: 150px;
  margin: 10px;
  cursor: pointer;
}
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}
.lightbox img {
  max-width: 80%;
  max-height: 80%;
}
.lightbox .close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.style.display = 'none';
});
