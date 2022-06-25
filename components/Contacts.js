class Page {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('app__about');

        this.elem.innerHTML = `
        <h2 >Contacts</h2>

        <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius obcaecati dolore rem fugit sint.</p>
        <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio aspernatur totam!</p>
        <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste unde porro doloribus reiciendis optio illo, molestiae earum. Nemo ducimus assumenda modi.</p>
   
        `;

    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Page().init();