import '../styles/styles.css';
import 'lazysizes';
import RevealOnScroll from './modules/RevealOnScroll';
import ToggleHeader from './modules/ToggleHeader';
import HamburgerMenu from './modules/HamburgerMenu';

new RevealOnScroll(document.querySelectorAll(".reveal"), 75);
new ToggleHeader();
new HamburgerMenu();

setTimeout(function(){
    document.body.className="";
},700);

if (module.hot) {
    module.hot.accept()
};