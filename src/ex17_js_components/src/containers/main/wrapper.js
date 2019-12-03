import {createBoard, Board} from "../../components/main/board.js";

let dataMock = JSON.parse(localStorage.getItem('data')) ||
  [{
    title: "backlog",
    issues: [
      {
        id: 0,
        name: 'bugfix'
      },
      {
        id: 1,
        name: 'fix errors'
      }
    ]
  },
  {
    title: 'ready',
    issues: [
      {
        id: 2,
        name: 'sprint bugfix'
      }
    ]
  },
  {
    title: 'in progress',
    issues: [
      {
        id: 4,
        name: 'made a feature'
      }
    ]
  },
  {
    title: 'finished',
    issues: []
  }
];

const Main = document.createElement('main');
Main.classList.add('boards');
Main.id = 'boards';

const MainStyle = document.createElement('link');
MainStyle.setAttribute('rel', 'stylesheet');
MainStyle.setAttribute('href', './src/containers/main/main-style.css');
document.getElementsByTagName('head')[0].appendChild(MainStyle);

dataMock.forEach((item, i) => {
  Main.appendChild(createBoard(item.title, i));
});

export {Main, Board}