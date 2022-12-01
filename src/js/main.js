import createCard from './modules/createSkillsCard.js';
import { skillsArray } from './constants/data.js';
import {skillsContent, skillsArrow} from "./constants/common.js";
import showSkills from "./modules/skills.js";
import {scrollTo} from "./modules/helpers.js";

skillsArray
  .sort((a, b) => b.rating - a.rating)
  .forEach((skill) => skillsContent.insertAdjacentHTML('beforeend', createCard(skill)));

skillsArrow.addEventListener('click', () => showSkills());

