import "../styles/scss/index.scss"
import createCard from './modules/createSkillsCard.js';
import { skillsArray } from './constants/data.js';
import { SKILLS_CONTENT, SKILLS_ARROW, ANIM_ITEMS } from './constants/common.js';
import { showSkills } from "./modules/skills.js";
import { checkAnimItems } from './modules/animation.js';

checkAnimItems(ANIM_ITEMS)
skillsArray
  .sort((a, b) => b.rating - a.rating)
  .forEach((skill) => SKILLS_CONTENT.insertAdjacentHTML('beforeend', createCard(skill)));

SKILLS_ARROW.addEventListener('click', () => showSkills());

