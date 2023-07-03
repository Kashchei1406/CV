import './../styles/scss/index.scss';
import createCard from './modules/createSkillsCard.js';
import { flags, networks, skillsArray, cv, triphouseImage, selfPhoto } from './constants/data.js';
import {
  SKILLS_CONTENT,
  SKILLS_ARROW,
  ANIM_ITEMS,
  SECTIONS,
  SOCIAL_MEDIA,
  FLAGS_CONTAINER,
  CV_LINK,
  IMG_TRIPHOUSE,
  HEADER_IMAGE,
} from './constants/common.js';
import { checkAnimItems, sectionObserver } from './modules/animation.js';
import { createFlag, createNetworks } from './modules/helpers';

checkAnimItems(ANIM_ITEMS);

CV_LINK.href = cv;
IMG_TRIPHOUSE.src = triphouseImage;
HEADER_IMAGE.src = selfPhoto;

skillsArray
  .sort((a, b) => b.rating - a.rating)
  .forEach((skill) => SKILLS_CONTENT.insertAdjacentHTML('beforeend', createCard(skill)));

networks.forEach((net) => {
  SOCIAL_MEDIA.insertAdjacentHTML('beforeend', createNetworks(net));
});
flags.forEach((item) => FLAGS_CONTAINER.insertAdjacentHTML('beforeend', createFlag(item)));

SKILLS_ARROW.addEventListener('click', () => {
  SKILLS_ARROW.classList.toggle('_rotate');
  SKILLS_CONTENT.classList.toggle('_full-height');

/*  if (SKILLS_CONTENT.classList.contains('_full-height')) {
    fullSectionObserver.observe(SKILLS_SECTION);
  } else fullSectionObserver.unobserve(SKILLS_SECTION);*/
});

SECTIONS.forEach((section) => sectionObserver.observe(section));
