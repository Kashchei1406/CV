import { skillsArrow, skillsContent } from '../constants/common.js';
import { scrollTo } from './helpers.js';

export default function showSkills() {
  if (!!skillsContent.classList.contains('_full-height')) {
    skillsContent.classList.remove('_full-height');
    skillsArrow.classList.remove('_rotate');
    setTimeout(() => scrollTo(document.getElementById('skills-section')), 200);

    return;
  }

  skillsContent.classList.add('_full-height');
  skillsArrow.classList.add('_rotate');
  scrollTo(document.getElementById('skills-section'));
}
