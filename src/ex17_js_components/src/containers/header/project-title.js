class ProjectTitle extends HTMLElement {
  constructor() {
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
       }`;
    div.innerHTML = `
      
    `;
    shadow.appendChild(style);
    shadow.appendChild(div);
  }


}