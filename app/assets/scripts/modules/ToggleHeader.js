import throttle from 'lodash/throttle'

class ToggleHeader {
    constructor() {
        this.itemToToggle = document.querySelector(".toggle");
        this.hide = "toggle--hide";
        this.lastScroll = 0;
        this.scrollThrottle = throttle(this.calculateIfScrollDown, 200).bind(this);
        this.events();
    }
    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("mousemove", event => this.calculateIfHover(event));
    }
    calculateIfScrollDown() {
        this.currentScroll = window.pageYOffset;
            if (this.currentScroll > this.lastScroll && !this.itemToToggle.classList.contains(this.hide)) {
                this.hideItem();
                this.itemToToggle.isRevealed = false;
            } else if (this.currentScroll < this.lastScroll && this.itemToToggle.classList.contains(this.hide)) {
                this.showItem();
                this.itemToToggle.isRevealed = true;
            }
            this.lastScroll = this.currentScroll;
    }
    calculateIfHover(event) {
        this.currentY = event.y;
        if (this.currentY < window.innerHeight/4 && this.itemToToggle.classList.contains(this.hide)) {
            this.showItem();
        } else if (this.currentY > window.innerHeight/4 && !this.itemToToggle.classList.contains(this.hide) && this.itemToToggle.isRevealed == false){
            this.hideItem();
        }
    }
    showItem() {
        this.itemToToggle.classList.remove(this.hide);
    }
    hideItem() {
        this.itemToToggle.classList.add(this.hide);
    }
}

export default ToggleHeader;