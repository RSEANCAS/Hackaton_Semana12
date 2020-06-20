const dropdown = (selector) => {
    this.element = document.querySelector(selector);
    this.init = () => {
        this.element.querySelector('span').addEventListener("click", toogleItems);
    }
    var toogleItems = (e) => {
        e.preventDefault();
        this.element.querySelector('ul').classList.toggle('active');
    }
    this.init();
}