class Page {
    create() {
        this.elem = document.createElement('div')
        this.elem.classList.add('product')

        this.items = document.cookie.slice(5).split(',') 

        let priceAll = document.createElement('div')
        priceAll.classList.add('price__all_product') 

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

                this.items.forEach(item => {
                    if (item == prod.id) {
                        let product = document.createElement('ul')
                        
                        product.classList.add('basket__ul')
                        product.setAttribute('data-id', prod.id)

                        let btnPlus = document.createElement('button')
                        btnPlus.classList.add('basket__button')
                        btnPlus.classList.add('plus')
                        btnPlus.addEventListener('click', function(){
                            priceAll.innerHTML = ''
                            inputAmount.value = +inputAmount.value + 1
                            price.innerHTML = `${(+prod.price) * (+inputAmount.value)} $`
                        })
                        let btnMin = document.createElement('button')
                        btnMin.classList.add('basket__button')
                        btnMin.classList.add('minus')
                        
                        btnMin.addEventListener('click', function(){
                            priceAll.innerHTML = ''
                            if (inputAmount.value == '1') return
                            inputAmount.value = +inputAmount.value - 1
                            price.innerHTML = `${(+prod.price) * (+inputAmount.value)} $`
                        })
                        let newId = []
                        let btnRemove = document.createElement('button')
                        btnRemove.classList.add('basket__remove')
                        
                        btnRemove.addEventListener('click', function(){
                            priceAll.innerHTML = ''
                            product.remove()
                            let allProduct = document.querySelectorAll('.basket__ul')
                            allProduct = Array.from(allProduct)
                            if (allProduct.length == 0) {
                                document.cookie = "prod =''; max-age=-1"}
                                else {
                                    allProduct.forEach(item => {
                                        
                                        newId.push(item.dataset.id)
                                        document.cookie = `prod =${newId}; max-age=600`
                                    })
                                    
                                }
                            let divAM = document.querySelector('.basket__amount')
                            if (!document.cookie) {
                                divAM.innerHTML = '0'
                            } else {
                                divAM.innerHTML = document.cookie.slice(5).split(',').length
                            }
                            
                        })

                        let inputAmount = document.createElement('input');
                        inputAmount.setAttribute('type', 'text');
                        inputAmount.setAttribute('name', 'amount');
                        inputAmount.setAttribute('value', '1');
                        inputAmount.setAttribute('title', 'Press Enter to save');
                        inputAmount.addEventListener('input', 
                        function(){
                            inputAmount.value = inputAmount.value.replace(/[^0-9]/g, '');
                        }
                    )
                                            
                    inputAmount.addEventListener('keydown', function(e) {
                        if (e.code === 'Enter') {
                            priceAll.innerHTML = ''
                            price.innerHTML = `${(+prod.price) * (+inputAmount.value)} $`
                            if (inputAmount.value == '0') product.remove()
                            let allProduct = document.querySelectorAll('.basket__ul')
                            allProduct = Array.from(allProduct)
                            if (allProduct == []) {
                                document.cookie = "prod =''; max-age=-1"}
                                else {
                                    allProduct.forEach(item => {
                                        
                                        newId.push(item.dataset.id)
                                        document.cookie = `prod =${newId}; max-age=600`
                                    })
                                    
                                }
                            let divAM = document.querySelector('.basket__amount')
                            if (!document.cookie) {
                                divAM.innerHTML = '0'
                            } else {
                                divAM.innerHTML = document.cookie.slice(5).split(',').length
                            }
                        }
                      });

                        let price = document.createElement('div')
                        price.classList.add('price__product')
                        price.innerHTML = `${(+prod.price) * (+inputAmount.value)} $`

                          
                        
                        product.innerHTML = `
                        <li><img src="${prod.image}" alt="#" /></li>
                        <li>${prod.name}</li>
                        
                        `
                        product.append(btnMin, inputAmount, btnPlus, price, btnRemove)

                        this.elem.append(product)

                    }
                })
                
            });
        })

        
        
        let totalDiv = document.createElement('div')
        totalDiv.classList.add('total') 
        
        let btnTotal = document.createElement('button')
        btnTotal.classList.add('total__btn')
        btnTotal.innerHTML = 'Total price'
        btnTotal.addEventListener('click', function(){
            let allAmount = document.querySelectorAll('.price__product')
            allAmount = Array.from(allAmount)
            let total = 0;
            allAmount.forEach(item => {
                let a = parseInt(item.innerHTML)
                console.log(a)
                total = total + a
            })
            priceAll.innerHTML = `${total} $`
        })

        totalDiv.append(btnTotal, priceAll)

        this.elem.append(totalDiv)
                    
    }

    init() {
        this.create()

        return this.elem
    }

}

export default new Page().init()