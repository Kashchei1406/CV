import babelImg from '../../assets/images/babel.svg'
import htmlImg from '../../assets/images/html.svg'
import cssImg from '../../assets/images/css.svg'
import sassImg from '../../assets/images/sass.svg'
import gitImg from '../../assets/images/git.svg'
import jsImg from '../../assets/images/js.svg'
import githubImg from '../../assets/images/github.svg'
import pugImg from '../../assets/images/pug.svg'
import webpackImg from '../../assets/images/webpack.svg'
import nodeJsImg from '../../assets/images/node.svg'
import npmImg from '../../assets/images/npm.svg'
import reactImg from '../../assets/images/react.svg'
import reactRouteImg from '../../assets/images/react-router.svg'
import reduxSagaImg from '../../assets/images/redux-saga.svg'
import jssImg from '../../assets/images/jss.svg'
import expressImg from '../../assets/images/express.svg'
import nginxImg from '../../assets/images/nginx.svg'
import figmaImg from '../../assets/images/figma.svg'
import reduxImg from '../../assets/images/redux.svg'
import pdfFile from '../../assets/files/resume.pdf'
import enflag from '../../assets/images/enFlag.svg'
import plflag from '../../assets/images/plFlag.svg'
import ruflag from '../../assets/images/ruFlag.svg'
import tgIcon from '../../assets/images/tg.svg'
import linkedIcon from '../../assets/images/linkedIn.svg'
import selfPhoto from '../../assets/images/photo.jpg'


export const skillsArray = [
  { id: 1, name: 'HTML', img: htmlImg, rating: 4 },
  { id: 2, name: 'CSS', img: cssImg, rating: 4 },
  { id: 3, name: 'SASS', img: sassImg, rating: 4 },
  { id: 4, name: 'Git', img: gitImg, rating: 3 },
  { id: 5, name: 'JavaScript', img: jsImg, rating: 3 },
  { id: 6, name: 'Github', img: githubImg, rating: 3 },
  { id: 7, name: 'Pug', img: pugImg, rating: 2 },
  { id: 8, name: 'Webpack', img: webpackImg, rating: 3 },
  { id: 9, name: 'Babel', img: babelImg, rating: 2 },
  { id: 10, name: 'Node.js', img: nodeJsImg, rating: 1 },
  { id: 11, name: 'npm', img: npmImg, rating: 3 },
  { id: 12, name: 'React', img: reactImg, rating: 2 },
  { id: 13, name: 'React Router', img: reactRouteImg, rating: 0 },
  { id: 14, name: 'Redux-Saga', img: reduxSagaImg, rating: 0 },
  { id: 15, name: 'JSS', img: jssImg, rating: 0 },
  { id: 16, name: 'Express', img: expressImg, rating: 0 },
  { id: 17, name: 'Nginx', img: nginxImg, rating: 0 },
  { id: 18, name: 'Figma', img: figmaImg, rating: 3 },
  { id: 19, name: 'Redux', img: reduxImg, rating: 0 },
];

export const flags = [
  {id: 20, name: 'English', img: enflag, alt: 'England Flag', level: 'Elementary A2'},
  {id: 21, name: 'Polish', img: plflag, alt: 'Poland Flag', level: 'Elementary A2'},
  {id: 22, name: 'Russian', img: ruflag, alt: 'Russian flag', level: 'Native C2' }
]

export const networks = [
  { name: 'Github', img: githubImg, link: 'https://github.com/Kashchei1406'},
  { name: 'LinkedIn', img: linkedIcon, link: 'https://www.linkedin.com/in/andrei-kashchei-07773b1b4/'},
  { name: 'Telegram', img: tgIcon, link: 'https://t.me/Andrei_Kashchei'},

]

export { pdfFile };
