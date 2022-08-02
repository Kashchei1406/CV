const animItems = document.querySelectorAll('._anim-item');
const ANIM_START = 4;

if (animItems.length > 0) {
  const animationOnScroll = (params) => {
    for (let i = 0; i < params.length; i += 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem);
      let animeItemPoint = window.innerHeight - animItemHeight / ANIM_START;

      if (animItemHeight > window.innerHeight) {
        animeItemPoint = window.innerHeight - window.innerHeight / 4;
      }

      if (window.scrollY > animItemOffset - animeItemPoint && window.scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  setTimeout(() => {
    animationOnScroll(animItems);
  }, 200);
}

function offset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}
