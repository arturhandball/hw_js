/*1. Свойство data – для хранения данных о контакте в виде простого объекта со сл. полями: id, 
name, email, address, phone.
2. Метод edit(obj) – для редактирования данных контакта. В качестве параметра метод должен 
принимать объект с обновленными данными и обновлять свойство data.
3. Метод get() – для получения данных о контакте. Метод должен возвращать объект с данными 
из св-ва data.
4. При создании объекта на основе этого класса важно передать в конструктор данные о контакте
в виде объекта для дальнейшего сохранения в св-во data.*/



class User {
    #data = {}

    constructor(userData) {
        this.#data = userData;       
    }

    edit(editData) {

        this.#data = {...this.#data, ...editData};
    }

    get() {
        return this.#data;
    }

}





/*Свойство data – для хранения всех добавленных контактов в массиве. Каждый эл-т массива 
должен представлять собой объект созданный на основе класса «User».
2. Метод add() – для создания контакта (на основе класса «User») и добавления его в массив data.
3. Метод edit(id, obj) – для редактирования информации конкретного контакты из св-ва data, 
используя соответствующий метод из «User». В качестве параметра нужно передать 
идентификатор контакта для последующего поиска и объект с новыми данными для 
редактирования.
4. Метод remove(id) – для удаления контакта из общего массива данных по идентификатору. В 
качестве параметра нужно передать идентификатор контакта.
5. Метод get() – для получения всех контактов. Метод должен возвращать объект с данными из 
св-ва data.*/

class Contacts{
    #data = [];
    #lastID = 0;

    async getData() {
        
        let dataApi = await  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(result=> {
            result.forEach(item => {
                const user =  {
                    name: item.name,
                    phone: item.phone,
                    email: item.email,
                    adres: `city ${item.address.city} street ${item.address.street}`,
                }
                this.add(user)
            })
           
        })
        return dataApi;
        }

    add(addData){
        addData = {...addData, ...{id: this.#lastID}}
        let user = new User(addData);
        this.#data.push(user)
        this.#lastID++

    }

    edit(ID, editData){
        let contact = this.#data.find((elem) => elem.get().id == ID)
        contact.edit(editData)
    }

    remove(ID){

        let dataTmp = this.#data.filter((elem)=>{
            return elem.get().id != ID;
        })
        this.#data = dataTmp;

    }

    get(id) {
        if (id || id == 0) {
            let note = this.#data.find(elem => {
                return elem.get().id == id;
            });
            return note
        } else {
        return this.#data;}
    }
}

/*1. При создании объекта на основе этого класса в DOM должен добавляться главный контейнер 
приложения, например, «<div class=”contacts”></div>». Доступ к контейнеру должен быть 
через свойство «app» (должен хранить созданный элемент).
2. Также, в конструкторе или через любой метод в классе полностью создайте интерфейс вашего
приложения внутри главного контейнера. Предусмотрите форму с полями и кнопками для 
добавления и редактирования контактов. Дизайн может быть любым, но адаптивным к 
мобильным устройствам.
3. Методы onAdd(), onEdit() и onRemove() – должны срабатывать по клику по соотв. кнопкам в 
интерфейсе для добавления/редактирования/удаления контакта. Важно использование 
методов от «Contacts» при соотв. действиях.
4. Метод get() - для получения и обновления списка контактов в соотв. контейнере вашего 
приложения. Важно сохранить возможности родительского метода.*/

class ContactsApp extends Contacts{
    #app;

    constructor (){
        super();

       
        this.getStorage(). then(() => this.update())
  
        this.update()
    }

    onAdd(userData){
        this.add(userData);
        this.setStorage()
        this.update();
    }

    update(){

        this.clearStorage()


        if (document.querySelector('.contacts')) document.querySelector('#contacts').remove()
        let container = document.querySelector('.app')
        this.#app = document.createElement('div')
        this.#app.classList.add('contacts')
        this.#app.id = 'contacts';
        container.append(this.#app);
    
        const inputName = document.createElement('input');
        inputName.classList.add('info');
        inputName.name = 'name';
        inputName.placeholder = 'Name';


        const inputEmail = document.createElement('input');
        inputEmail.classList.add('info');
        inputEmail.name = 'email';
        inputEmail.placeholder = 'Email';

        const inputAdres = document.createElement('input');
        inputAdres.classList.add('info');
        inputAdres.name = 'address';
        inputAdres.placeholder = 'Address';

        const inputPhone = document.createElement('input');
        inputPhone.classList.add('info');
        inputPhone.name = 'phone';
        inputPhone.placeholder = 'Phone';

        const addButton = document.createElement('button');
        addButton.classList.add('add__item');
        addButton.innerText = 'Add';

        const data = this.get()
        const usersList = document.createElement('div');
        usersList.classList.add('usersList')

        const divBtn = document.createElement('div')
        divBtn.classList.add('divBtn')




        data.forEach((contact)=>{
            const dataContacts = contact.get();
            const contactInfo = document.createElement('ul')
            contactInfo.innerHTML = `
            <li> <span>Name:</span>  
            ${dataContacts.name}</li>
            <li> <span>Phone:</span>
            ${dataContacts.phone}</li>
            <li> <span>Email:</span>
            ${dataContacts.email}</li>
            <li> <span>Address:</span>
            ${dataContacts.adres}</li>
            
           `

            const removeButton = document.createElement('button');
            // removeButton.innerText = 'Remove'
            removeButton.classList.add('remove')
            const imgR = document.createElement('img')
            imgR.setAttribute('src','./remove.svg')
            imgR.setAttribute('alt','#')
            removeButton.append(imgR)
            removeButton.addEventListener('click', (e) => {

                this.onRemove(dataContacts.id);


            })

            const editButton = document.createElement('button');
            // editButton.innerText = 'Edit';
            editButton.classList.add('edit')
            const imgE = document.createElement('img')
            imgE.setAttribute('src','./edit.svg')
            imgE.setAttribute('alt','#')
            editButton.append(imgE)
            editButton.addEventListener('click', (e) => {
                    this.onEdit(dataContacts.id)
                })


                usersList.append(contactInfo)
                contactInfo.append(removeButton, editButton)
                
            });


        this.#app.append(inputName, inputPhone, inputEmail, inputAdres, addButton, usersList)
        

        addButton.addEventListener('click', (e)=>{
            e.preventDefault()

            if (inputName.value == '' && inputEmail.value == '' && inputAdres.value == '' && inputPhone.value == '') {
                return;
            } else {
                const userData = {
                name:inputName.value,
                phone:inputPhone.value,
                email:inputEmail.value,
                adres:inputAdres.value,
                
            }

            this.onAdd(userData)
           
        }
        })        
       
    };

    clearStorage() {
        if (document.cookie.includes('storageExpiration') == false) {
            localStorage.removeItem('contacts')
        }
    }

    setStorage(){

        let dataTmp = this.get().map(elem =>{
            return elem.get()
        })
      
        dataTmp = JSON.stringify(dataTmp)

        localStorage.setItem('contacts', dataTmp)


        let date = new Date(Date.now() + 864000000);
        date = date.toUTCString();
        document.cookie = 'storageExpiration=true; expires=' + date
      
    }

    async getStorage(){

        let dataLocal = localStorage.getItem('contacts')
    
        if (!dataLocal || dataLocal == '[]') {
            dataLocal = await  this.getData();
            return dataLocal
        } 

        dataLocal = JSON.parse(dataLocal);
       
        dataLocal.forEach(item => {
            console.log(item)
            this.add(item);
        });

    }

    onRemove(id){
        this.remove(id);
        this.setStorage()
        this.update();
    }

    onEdit(id){
        let contact = this.get(id)
        
        let editform = document.querySelector('.editform');
        if (editform) editform.remove();

        editform = document.createElement('div');
        editform.classList.add('editform');
       
        
        const inputName = document.createElement('input');
        inputName.placeholder = 'Name';
        inputName.value = contact.get().name

        const inputPhone = document.createElement('input');
        inputPhone.placeholder = 'Phone';
        inputPhone.value = contact.get().phone

        const inputEmail = document.createElement('input');
        inputEmail.placeholder = 'Email';
        inputEmail.value = contact.get().email

        const inputAdres = document.createElement('input');
        inputAdres.placeholder = 'Address';
        inputAdres.value = contact.get().adres

        const btnSaveElem = document.createElement('button');
        btnSaveElem.classList.add('savebtn');
        // btnSaveElem.innerHTML = 'Save';
        const imgS = document.createElement('img')
        imgS.setAttribute('src','./save.png')
        imgS.setAttribute('alt','#')
        btnSaveElem.append(imgS)

        let name = document.createElement('span')
        name.innerHTML = 'Name'

        let phone = document.createElement('span')
        phone.innerHTML = 'Phone'

        let email = document.createElement('span')
        email.innerHTML = 'Email'

        let adres = document.createElement('span')
        adres.innerHTML = 'Address'


        editform.append(
            name,
            inputName,
            phone,
            inputPhone,
            email,
            inputEmail,
            adres,
            inputAdres,
            btnSaveElem)
        document.body.append(editform)

        btnSaveElem.addEventListener('click', () => {
            let newData = {};

            newData.name = inputName.value
            newData.phone = inputPhone.value
            newData.email = inputEmail.value
            newData.adres = inputAdres.value

            editform.remove();

            this.edit(id, newData)
            this.setStorage()
            this.update()
        
        })
    }


}

let a = new ContactsApp();
// window.setInterval(function(){
//     if (document.cookie.includes('storageExpiration') == false) {
//         console.log('delete coockie')
//         localStorage.removeItem('contacts')
//         console.log('delete local')
//     }
// }, 100)

