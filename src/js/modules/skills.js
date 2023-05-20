import { SKILLS_ARROW, SKILLS_CONTENT } from '../constants/common.js';

export function showSkills() {
  if (!!SKILLS_CONTENT.classList.contains('_full-height')) {
    SKILLS_CONTENT.classList.remove('_full-height');
    SKILLS_ARROW.classList.remove('_rotate');

    return;
  }

  SKILLS_CONTENT.classList.add('_full-height');
  SKILLS_ARROW.classList.add('_rotate');
}
