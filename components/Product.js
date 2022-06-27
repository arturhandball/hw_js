class Page {

    create() {
        this.elem = document.createElement('div')
        this.elem.classList.add('product_card')

        this.items = document.cookie.slice(5).split(',') 
        if (this.items[0] == '') this.items = []

        let id = location.hash;
        id = id.split('/');
        id = id.pop();

        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
        .then(response => {
            return response.json()
        }).then (res => {
            
            res.forEach(item => {
                let prod = {
                    name: item.title,
                    image: item.images[0],
                    about: item.description,
                    price: item.price,
                    id: item.id,
                }

            if (prod.id == +id) {
                let card = document.createElement('ul')
                
                card.classList.add('product__items')
                card.setAttribute('data-id', prod.id)

                let btn = document.createElement('button')
                btn.classList.add('add__btn_product')
                btn.setAttribute('data-id', prod.id)
                btn.innerHTML = 'Add'
                
                
                card.innerHTML = `
                <li>${prod.name}</li>
                <li><a href="/product/${prod.id}"><img src="${prod.image}" alt="#" /></a></li>
                <li>${prod.about}</li>
                <li>${prod.price}$</li>
                
                `
                card.append(btn)
                
                this.elem.append(card)

               

                btn.addEventListener('click', (event) => {

                    btn.classList.add('click')
                    btn.innerHTML = 'In Basket'
                    
                    let divAM = document.querySelector('.basket__amount')

                    let idUl = event.target.parentElement
                    console.log (idUl.dataset.id)

                    if (this.items.includes(idUl.dataset.id) != true) {
                        this.items.push(idUl.dataset.id)
                        document.cookie = `prod =${this.items}; max-age=600`
                    } else {
                        return
                    }

                    divAM.innerHTML = document.cookie.slice(5).split(',').length
                   
                })
            }

        })
        let choosebtn = document.querySelectorAll('.add__btn_product')
        choosebtn = Array.from(choosebtn)
        choosebtn.forEach(item =>{
            item.classList.remove('click')
            if(this.items.includes(item.dataset.id)){
                item.classList.add('click')
                item.innerHTML = 'In Basket'
            }
        })
    })
        return this.elem
    }

    init() {
        this.create()

        return this.elem
    }
}

export default new Page().init();