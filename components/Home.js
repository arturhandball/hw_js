
class Page {

    
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('home__app');

        this.items = document.cookie.slice(5).split(',') 
        if (this.items[0] == '') this.items = []

        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
        .then(response => {
            return response.json()
        }).then (res => {

            res.sort(function(a, b) { return a.id - b.id; });
            
            res.forEach(item => {
                let prod = {
                    name: item.title,
                    image: item.images,
                    about: item.description,
                    price: item.price,
                    id: item.id,
                }
                let card = document.createElement('ul')
                
                card.classList.add('home__app__items')
                card.setAttribute('data-id', prod.id)

                let btn = document.createElement('button')
                btn.classList.add('add__btn')
                btn.setAttribute('data-id', prod.id)
                btn.innerHTML = 'Add'
                
                
                card.innerHTML = `
                <li>${prod.name}</li>
                <li><a href="/#product/${prod.id}"><img src="${prod.image}" alt="#" /></a></li>
                <li>${prod.about}</li>
                <li>${prod.price}$</li>
                
                `
                card.append(btn)
                
                this.element.append(card)

               

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
                
            });
            let choosebtn = document.querySelectorAll('.add__btn')
            choosebtn = Array.from(choosebtn)
            choosebtn.forEach(item =>{
                item.classList.remove('click')
                if(this.items.includes(item.dataset.id)){
                    item.classList.add('click')
                    item.innerHTML = 'In Basket'
                }
            })
        })

        return this.element
    }

    init(){
        this.create()
        
        return this.element


    }

}

export default new Page().init();
