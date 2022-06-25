import Nav from "./Nav.js";

class Header {
    create() {
        this.elem = document.createElement('header');
        this.elem.classList.add('app__header');

        this.elem.innerHTML = `
            <div class="header__logo">
                <a href="/"><img src="./css/logo.png" alt="logo"></a>
            </div>
        `;

        this.elem.append(Nav)

    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Header().init();