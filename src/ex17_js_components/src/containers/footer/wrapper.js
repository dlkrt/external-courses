const Footer = document.createElement('footer');
Footer.classList.add('footer');

const activeTasks = document.createElement('span'),
    finishedTasks = document.createElement('span');
activeTasks.innerText = 'Active tasks: <N>';
finishedTasks.innerText = 'Finished tasks: <M>';

const tasksInfo = document.createElement('div'),
  author = document.createElement('div');
tasksInfo.classList.add('footer__tasks');
tasksInfo.appendChild(activeTasks);
tasksInfo.appendChild(finishedTasks);
author.classList.add('footer__author');
author.innerText = 'Kanban board by Danil, 2019';

Footer.appendChild(tasksInfo);
Footer.appendChild(author);
const FooterStyle = document.createElement('link');
FooterStyle.setAttribute('rel', 'stylesheet');
FooterStyle.setAttribute('href', './src/containers/footer/footer.css');
document.getElementsByTagName('head')[0].appendChild(FooterStyle);

export {Footer};