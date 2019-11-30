class HeaderLogo extends HTMLElement {
  constructor(projectName) {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = `
      .header__title {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-left: 21px;
       }
       .header__main-menu {
        cursor: pointer;
        background: url("./assets/main-menu.svg") no-repeat center;
        min-width: 35px;
        min-height: 35px;
      }`;
    div.innerHTML = `
        <div class="header__main-menu">
        </div>
        <div class="header__logo">
          ${projectName}
        </div>
    `;
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

export { HeaderLogo };