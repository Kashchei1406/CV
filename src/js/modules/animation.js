import { NAV_LINKS, SECTIONS } from '../constants/common';

const animObserver = new IntersectionObserver(
  (entries,observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_active');
        observer.unobserve(entry.target)
      }
    });
  },
  { threshold: 0.1 }
);
export const checkAnimItems = (items) =>{
  items.forEach(item => animObserver.observe(item))
}

const callback = (entries) =>{
  entries.forEach( (entry) => {

    let currentEntry = 0;

    if (entry.isIntersecting && entry.intersectionRatio > 0.8){
      console.log(currentEntry);
      if (currentEntry !== Number(entry.target.dataset.num)) {
        NAV_LINKS.forEach(link => {
          link.classList.remove('_active-nav')
        })
      }

      currentEntry = '' + entry.target.dataset.num;

        if ( entry.target.dataset.num === '0'){
          NAV_LINKS[0].classList.add('_active-nav')
        } else {
          for (let i = 0; i <= entry.target.dataset.num; i++) {
            setTimeout(() => {
              NAV_LINKS[i].classList.add('_active-nav')
            }, 0)
          }
        }
      }
    })
}

export const sectionObserver = new IntersectionObserver(callback,{
  threshold: [0.01,0.1, 0.3, 0.59, 0.61, 0.8, 0.9, 0.99, 1],
  rootMargin: '-110px 0px 0px 0px'
})

SECTIONS.forEach(section => sectionObserver.observe(section))

