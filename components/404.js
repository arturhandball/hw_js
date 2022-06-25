class Page {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('error');

        this.elem.innerHTML = `
        404
        `;

    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Page().init();