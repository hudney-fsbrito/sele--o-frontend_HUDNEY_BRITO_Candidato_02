export function Gallery() {
  return `
    <section class="gallery" data-test="gallery">
        <div class="gallery-grid" id="gallery-grid"></div>
    </section>
  `;
}

export function loadGalleryImages() {
  const galleryContainer = document.getElementById("gallery-grid");
  if (!galleryContainer) return;

  const galleryImages = [
    "itarace-hotel-01.jpg",
    "itarace-hotel-02.jpg",
    "itarace-hotel-03.jpg",
    "itarace-hotel-04.jpg",
    "itarace-hotel-05.jpg",
    "itarace-hotel-06.jpg",
  ];

  galleryImages.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = `/src/assets/img/${image}`;
    img.alt = "Hotel Miragem - Galeria";
    img.loading = "lazy";
    img.decoding = "async";

    img.classList.add("animate-on-scroll");
    img.style.transitionDelay = `${index * 0.1}s`;

    galleryContainer.appendChild(img);
  });
}
