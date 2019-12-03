const HeaderTitle = document.createElement('div');
HeaderTitle.classList.add('header__title');
HeaderTitle.innerHTML = `
 <div class="header__main-menu">
  </div>
  <div class="header__logo">
        Awesome Kanban Board
  </div>
`;
const HeaderTitleStyle = document.createElement('link');
HeaderTitleStyle.setAttribute('rel', 'stylesheet');
HeaderTitleStyle.setAttribute('href', './src/components/header/header__title.css');
document.getElementsByTagName('head')[0].appendChild(HeaderTitleStyle);

export { HeaderTitle };