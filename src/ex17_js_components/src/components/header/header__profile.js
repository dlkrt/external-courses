import { NewListBtn } from "./button_new-list.js";
import { HeaderProfileMenu } from "./header__profile-menu.js";

const HeaderProfile = document.createElement('div');
HeaderProfile.classList.add('header__profile');
HeaderProfile.appendChild(NewListBtn);
HeaderProfile.appendChild(HeaderProfileMenu);

const HeaderProfileStyle = document.createElement('link');
HeaderProfileStyle.setAttribute('rel', 'stylesheet');
HeaderProfileStyle.setAttribute('href', './src/components/header/header__profile.css');
document.getElementsByTagName('head')[0].appendChild(HeaderProfileStyle);

export { HeaderProfile };