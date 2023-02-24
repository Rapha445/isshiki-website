class HamburgerMenu {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.menuContent = document.querySelector(".navbar__menu-content");
        this.siteHeader = document.querySelector(".navbar");
        this.events();
    }
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }
    toggleTheMenu() {
        this.menuContent.classList.toggle("navbar__menu-content--is-visible");
        this.menuIcon.classList.toggle("navbar__menu-icon--close-x");
    }
}

export default HamburgerMenu;