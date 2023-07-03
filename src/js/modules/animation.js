import { NAV_LINKS } from '../constants/common';

const animObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

export const checkAnimItems = (items) => {
  items.forEach(item => animObserver.observe(item));
};

const callback = entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      NAV_LINKS.forEach(link => {
        link.classList.remove('_active-nav');
      });

      if (entry.target.dataset.num === '0') {
        NAV_LINKS[0].classList.add('_active-nav');
      } else {

        for (let i = 0; i <= entry.target.dataset.num; i++) {
          NAV_LINKS[i].classList.add('_active-nav');
        }
      }
    }
  });
};

export const sectionObserver = new IntersectionObserver(callback, {
  threshold: [ 0.3, 0.4, 0.5],
  rootMargin: '-110px 0px 0px 0px',
});

/*export const fullSectionObserver = new IntersectionObserver((entry) => {
  entry.forEach(item => {
    if (item.isIntersecting && item.intersectionRatio >= 0.3){
      NAV_LINKS.forEach(link => {
        link.classList.remove('_active-nav')
      })
      for (let i = 0; i <= 1; i++) {
        NAV_LINKS[i].classList.add('_active-nav')
      }
    }
  })
},{
  threshold: [0.25, 0.31],
  rootMargin: '-110px 0px 0px 0px'
});*/
