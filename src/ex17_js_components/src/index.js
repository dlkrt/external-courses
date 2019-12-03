import { Header } from "./containers/header/wrapper.js";
import { Main, Board } from "./containers/main/wrapper.js";
import { Footer } from "./containers/footer/wrapper.js";

document.querySelector('.container').appendChild(Header);
document.querySelector('.container').appendChild(Main);
Board();
document.querySelector('.container').appendChild(Footer);
