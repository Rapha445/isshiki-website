import '../styles/styles.css';
import 'lazysizes';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll(".reveal"), 75)

if (module.hot) {
    module.hot.accept()
};