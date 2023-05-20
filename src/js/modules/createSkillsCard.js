import starImg from '../../assets/images/star-black.svg'
import starGreyImg from '../../assets/images/star-grey.svg'

const blackStarImage = document.createElement('img');
blackStarImage.src = starImg;
blackStarImage.alt = 'Rating star, black';
const greyStarImage = document.createElement('img');
greyStarImage.src = starGreyImg;
greyStarImage.alt = 'Rating star, grey';

const createRating = (rating) => {
  const divSkillRating = document.createElement('div');
  divSkillRating.classList.add('skills__rating');
  for (let i = 1; i < 6; i += 1) {
    if (i <= rating) {
      divSkillRating.appendChild(blackStarImage.cloneNode(true));
    } else {
      divSkillRating.appendChild(greyStarImage.cloneNode(true));
    }
  }
  return divSkillRating.innerHTML;
};

export default function createCard(data) {
  const { id, name, img, rating } = data;
  return `
             <figure class="skills__item col-2" id=${id}>
                <img src=${img} alt=${name} />
                <figcaption>
                  <span>${name}</span>
                  <div class="skills__rating">
                    ${createRating(rating)}
                  </div>
                </figcaption>
             </figure>`;
}
