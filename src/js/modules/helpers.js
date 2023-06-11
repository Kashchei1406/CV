import cv from '../../assets/files/resume.pdf'

const cv_link = document.getElementById('cv-link')
cv_link.href = cv



export const createFlag = (flag) => {
    const {id, name, img, alt, level} = flag;

    return`
             <figure class="languages__item col-4" id=${id}>
                <img src=${img} alt=${alt} />
                <figcaption class='languages__language'>
                  ${name}
                  <span class='languages__language-level'>${level}</span>
                </figcaption>
             </figure>`;

}

export const createNetworks = (network) => {
  const {name, img, link} = network

  return`
      <a class='social-network' href=${link}>
        <img class='social-network__img' src=${img} alt=${name}>
      </a>
  `
}




