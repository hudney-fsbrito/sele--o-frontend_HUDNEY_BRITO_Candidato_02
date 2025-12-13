export function Gallery() {
  return `
    <section class="gallery" data-test="gallery" aria-label="Galeria de fotos do Hotel Miragem">
        <div class="gallery-grid" id="gallery-grid"></div>
    </section>
  `;
}

export function loadGalleryImages() {
  const galleryContainer = document.getElementById("gallery-grid");
  if (!galleryContainer) return;

  const galleryImages = [
    { src: "itarace-hotel-01.jpg", alt: "Piscina do Itarace Hotel" },
    { src: "itarace-hotel-02.jpg", alt: "Quarto standard com varanda" },
    { src: "itarace-hotel-03.jpg", alt: "Lobby do hotel" },
    { src: "itarace-hotel-04.jpg", alt: "Restaurante do hotel" },
    { src: "itarace-hotel-05.jpg", alt: "Academia do hotel" },
    { src: "itarace-hotel-06.jpg", alt: "Vista aérea do hotel" },
  ];

  galleryImages.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = `/src/assets/img/${image.src}`;
    img.alt = image.alt;
    img.loading = "lazy";
    img.decoding = "async";

    img.classList.add("animate-on-scroll");
    img.style.transitionDelay = `${index * 0.1}s`;

    galleryContainer.appendChild(img);
  });
}
