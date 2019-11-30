import { HeaderLogo } from "../../components/header__title.js";

class Header extends HTMLDataElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    const header = document.createElement('header');
    const style = document.createElement('style');
    style.textContent = `
      .header {
        background-color: #0067A3;
        display: flex;
        flex-basis: 7.5vh;
        justify-content: space-between;
        align-items: center;
      }`;
    shadow.appendChild(style);
    header.appendChild(new HeaderLogo('Awesome Kanban Board'));
    shadow.appendChild(header);
  }
}

export { Header };