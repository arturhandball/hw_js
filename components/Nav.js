

class Nav {
    create() {
        this.elem = document.createElement('nav');
        this.elem.classList.add('nav');

        this.elem.innerHTML = `
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">Shop</a></li>
            <li><a href="/#contacts">Contacts</a></li>
        </ul>
        `;

        let divBasket = document.createElement('div')
        divBasket.classList.add('basket')

        let linkBasket = document.createElement('a')
        linkBasket.setAttribute('href','/#basket')

        let imgBasket = document.createElement('img')
        imgBasket.setAttribute('src','./css/basket.svg')
        imgBasket.setAttribute('alt','#')

        let divAmount = document.createElement('div')
        divAmount.classList.add('basket__amount')

        divAmount.innerHTML = (document.cookie == '') ? '0' : document.cookie.slice(5).split(',').length
        linkBasket.append(imgBasket)
        divBasket.append(linkBasket, divAmount)
        this.elem.append(divBasket)
    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Nav().init();