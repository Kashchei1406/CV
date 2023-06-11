import "./../styles/scss/index.scss"
import createCard from './modules/createSkillsCard.js';
import { flags, networks, skillsArray } from './constants/data.js';
import { SKILLS_CONTENT, SKILLS_ARROW, ANIM_ITEMS, SECTIONS, SOCIAL_MEDIA } from './constants/common.js';
import { checkAnimItems, sectionObserver } from './modules/animation.js';
import { createFlag, createNetworks } from './modules/helpers';
const languages = document.getElementById('flags-container')

checkAnimItems(ANIM_ITEMS)
skillsArray
  .sort((a, b) => b.rating - a.rating)
  .forEach((skill) => SKILLS_CONTENT.insertAdjacentHTML('beforeend', createCard(skill)));
networks.forEach(net => {SOCIAL_MEDIA.insertAdjacentHTML('beforeend', createNetworks(net))})
flags.forEach(item => languages.insertAdjacentHTML('beforeend', createFlag(item)));

SKILLS_ARROW.addEventListener('click', () => {
  SKILLS_ARROW.classList.toggle('_rotate')
  SKILLS_CONTENT.classList.toggle('_full-height')

  const SECTIONS = document.querySelectorAll('.sec')
  SECTIONS.forEach(section => sectionObserver.observe(section))
});

SECTIONS.forEach(section => sectionObserver.observe(section))




