class Page {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('app__about');

        this.elem.innerHTML = `
        <h2>About Store</h2>
    
        <p class="paragraph">For 12 years, Swiss Time has been the official dealer of Swiss watches in Belarus. We represent world famous brands such as Tag Heuer, Longines, Hamilton, Tissot, Victorinox, Calvin Klein, Claude Bernard, Wenger, Swatch and Flik Flak.</p>
        <img class="about__img" src="./css/about.jpg" alt="#">
        <p class="paragraph"> Our Tissot monobrand boutique is located on the street. International, 4. For more than 160 years, the Tissot brand has embodied the Swiss character and is very popular all over the world. The boutique always has the most interesting and unusual models, limited editions, which are dedicated to certain events of the brand's advertising campaign.The online store will delight you with professional advice and prompt delivery.</p>
       
        `;

    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Page().init();