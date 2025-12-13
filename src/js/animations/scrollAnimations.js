export function initScrollAnimation() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  if (!("IntersectionObserver" in window)) {
    
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

 elements.forEach((el, index) => {
   el.style.transitionDelay = `${index * 0.12}s`;
   observer.observe(el);
 });
}
