const modal = (selector, f) => {
    this.element = document.querySelector(selector);
    this.init = () => {
        let hasStatus = this.element.hasAttribute('data-status');
        if (hasStatus) {
            let status = this.element.getAttribute('data-status');
            if (status == 'open') this.element.removeAttribute('data-status');
            else this.element.setAttribute('data-status', 'open');
        } else this.element.setAttribute('data-status', 'open');

        this.element.querySelectorAll('button[data-close="true"]').forEach(x => x.addEventListener('click', closeModal));
    }

    var closeModal = (e) => {
        e.preventDefault();

        this.element.removeAttribute('data-status');
    }


    this.init();
    if (typeof f === 'function') f;
}