const collapsiblegroup = (selector) => {
    this.element = document.querySelector(selector);
    this.init = () => {
        this.element.querySelectorAll('.group .header').forEach(x => x.addEventListener('click', toggleCollapsed));
    };

    var toggleCollapsed = (e) => {
        e.preventDefault();
        this.element.querySelectorAll('.group .content').forEach(x => x.classList.remove('active'));
        let elementHeader = e.currentTarget;
        elementHeader.parentElement.querySelector('.content').classList.toggle('active')
    }

    this.init();
}