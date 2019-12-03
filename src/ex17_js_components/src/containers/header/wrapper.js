import { HeaderTitle } from "../../components/header/header__title.js";
import { HeaderProfile } from "../../components/header/header__profile.js"

const Header = document.createElement('header');
Header.classList.add('header');
Header.appendChild(HeaderTitle);
Header.appendChild(HeaderProfile);

const HeaderStyle = document.createElement('link');
HeaderStyle.setAttribute('rel', 'stylesheet');
HeaderStyle.setAttribute('href', './src/containers/header/header-style.css');
document.getElementsByTagName('head')[0].appendChild(HeaderStyle);

export {Header}