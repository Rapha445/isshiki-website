import '../styles/styles.css';
import 'lazysizes';
import RevealOnScroll from './modules/RevealOnScroll';
import ToggleHeader from './modules/ToggleHeader';

new RevealOnScroll(document.querySelectorAll(".reveal"), 75);
new ToggleHeader();

setTimeout(function(){
    document.body.className="";
},700);

if (module.hot) {
    module.hot.accept()
};