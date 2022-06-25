class Main {
    create() {
        this.elem = document.createElement('main');
        this.elem.classList.add('main');
        

    }

    routing() {
        window.addEventListener('hashchange', () => {
            let hash = location.hash;
            hash = hash.slice(1);
            if (!hash || hash.length == 0) return;

            if (hash.includes('product/')) hash = 'product';

            console.log(hash)


            import(`./${hash}.js`)
            .then(module => {
                
                if (!module.default) return;

                this.elem.innerHTML = '';
                this.elem.append(module.default);
            });

            let divAM = document.querySelector('.basket__amount')
             if (!document.cookie) {
                    divAM.innerHTML = '0'
                } else {
                    divAM.innerHTML = document.cookie.slice(5).split(',').length
                }

        });

        let filename = '404';

        if (location.hash.length == 0 && 
            location.pathname == '/') {
                filename = 'Home'
            };

        import(`./${filename}.js`)
        .then(module => {
            if (!module.default) return;

            this.elem.innerHTML = '';
            this.elem.append(module.default);
        });

       
    }

    init() {

        this.routing()

        this.create();      

        return this.elem;
    }
}

export default new Main().init();