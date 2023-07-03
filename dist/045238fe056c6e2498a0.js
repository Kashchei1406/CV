import"./../styles/scss/index.scss";import createCard from"./modules/createSkillsCard.js";import{flags,networks,skillsArray,cv,triphouseImage,selfPhoto}from"./constants/data.js";import{SKILLS_CONTENT,SKILLS_ARROW,ANIM_ITEMS,SECTIONS,SOCIAL_MEDIA,SKILLS_SECTION,FLAGS_CONTAINER,CV_LINK,IMG_TRIPHOUSE,HEADER_IMAGE}from"./constants/common.js";import{checkAnimItems,sectionObserver,fullSectionObserver}from"./modules/animation.js";import{createFlag,createNetworks}from"./modules/helpers";checkAnimItems(ANIM_ITEMS),CV_LINK.href=cv,IMG_TRIPHOUSE.src=triphouseImage,HEADER_IMAGE.src=selfPhoto,skillsArray.sort(((e,r)=>r.rating-e.rating)).forEach((e=>SKILLS_CONTENT.insertAdjacentHTML("beforeend",createCard(e)))),networks.forEach((e=>{SOCIAL_MEDIA.insertAdjacentHTML("beforeend",createNetworks(e))})),flags.forEach((e=>FLAGS_CONTAINER.insertAdjacentHTML("beforeend",createFlag(e)))),SKILLS_ARROW.addEventListener("click",(()=>{SKILLS_ARROW.classList.toggle("_rotate"),SKILLS_CONTENT.classList.toggle("_full-height")})),SECTIONS.forEach((e=>sectionObserver.observe(e)));