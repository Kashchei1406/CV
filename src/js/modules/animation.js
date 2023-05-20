const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_active');
      }
    });
  },
  { threshold: 0.1 }
);
export const checkAnimItems = (items) =>{
  items.forEach(item => observer.observe(item))
}