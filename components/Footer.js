class Footer {
    create() {
        this.elem = document.createElement('footer');
        this.elem.classList.add('footer');

        this.elem.innerHTML = `
        <div class="header__logo">
            <a href="/"><img src="./css/logo.png" alt="logo"></a>
        </div>
        <ul class="footer__list">
            <li><img src = "./css/location.png" alt="#"><a href="https://yandex.by/maps/-/CCUJjIxltA">401 Michigan Ave, Chicago, IL 60611, USA</a></li>
            <li><img src = "./css/phone.png" alt="#"> + 255 55 55 365</li>
            <li><img src = "./css/mail.png" alt="#"> infostore@store.com</li>
        </ul>
    `;
    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Footer().init()