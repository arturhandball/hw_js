// let UserInfo = function(){
//     this.name = function(name){
//         name = prompt('Введите имя') 
//         this.name = name
//         this.lastname()
//     }
//     this.lastname = function(lastname){
//         lastname = prompt('Введите Фамилию') 
//         this.lastname = lastname;
//         this.age()
//     }
//     this.age = function(age) {
//         age = +prompt('Введите возраст')
//         if (age <= 0) {
//             alert ('Проверьте возраст')
//             return this.age()
//         } else if (isNaN(age)){
//             alert ('Ввели не число')
//             return this.age()
//         } else if ((age % 1 == 0) != true){
//             alert ('Ввели не целое число')
//             return this.age()
//         } else {
//             alert ('Возраст принят')
//         }
//         this.age = age;
//         this.phone()
//     }
//     this.phone = function (phone){
//         phone = prompt('Введите номер телефона');
//         this.phone = phone;
//         if (phone.length < 7) {
//             alert ('Слишком мало символов')
//             return  this.phone()
//         } else {
//             alert ('Номер принят')
//         }
//         this.email()
//     }
//     this.email = function (email) {
//         email = prompt('Введите адрес электронной почтой');
//         this.email = email;
//     }    
// }

// let userA = new UserInfo();
// userA.name()

// console.log(userA);

// console.log(userA.name);
// userA.name = 'Peter';
// console.log(userA);


// const Car = function(){

//     this.doors = function(doors) {
        
//         if (isNaN(doors) || doors < 1 || doors > 5) return;
//         this.doors = doors;
//     };

//     this.model = function(model) {
      
//         let listModel = ['BMW', 'AUDI', 'KIA', 'NISSAN']

//        if (typeof model != 'string' || listModel.includes(model.toLocaleUpperCase()) != true) return;
//        this.model = model.toLocaleUpperCase();
//      }

//      this.type = function(type) {
//          let types = ['Внедорожник', 'Хэтчбэк', 'Седан', 'Кроссовер'];

//          if (+type >=0 && +type < types.length) {
//             this.type = types[type]
//          } else {
//              return this.type = 'Диковина?'
//          }
//      }

//      this.engine = function(engine = 0) {
//         let typeEngine = ['Бензин', 'Электро'];
//         let engineAuto;
//         if (+engine > typeEngine.length) {
//             engine = 0
//         }
//         this.engine = typeEngine[engine];
//      }

//      this.mileage = function(mileage){
//          if (+mileage == 0 ) {
//              this.mileage = 'Нулевой пробег'
//          } else if (+mileage > 0) {
//              this.mileage = 'Пробег автомобиля ' + mileage + ' миль'
//          } else {
//              return;
//          }
//      }

//      let buyStatus = false;

//      this.buy = function(){
//          buyStatus = true;
//      }

//      this.checkAge = function(age) {
//         if (isNaN(age) || +age < 18 || +age > 113) {
//             buyStatus = false;
//         }
//     }

//      this.owner = function(name) {
//          if (buyStatus == true){
//             this.owner = name;
//          } else {
//              this.owner = 'Salon'
//          }
//      }
     
// }

// let newCar = new Car();


// const SandwichToTea = function(){
//     let sandwich;
//     let bread = 0;
//     let knife = 0;
//     let butter;
//     let sausage;
//     let cheese;
//     let hunger = true;
//     let eat = false;
//     let coocking = false;
//     let type = ['Burger', 'Tradition'];
//     let typeSandwich;

//     this.take = function(){
//         coocking = true;

//     }

//     this.ingredients = function(amount) {
//         if (amount < 1 || amount > 4 ) {
//             coocking = false;
//         } else {
//             bread = amount;
//             knife = 1;
//             butter = 1;
//             sausage = 1;
//             cheese = 1;
//         }
//     } 

//     this.typeSandwich = function(choise = 1){
//         if (type != 0 || type != 1) {
//             return;
//         } else {
//             typeSandwich = type[choise];
//         }
//     }

//     this.coocking = function() {
//         if (typeSandwich == 'Tradition'){
//             bread = amount;
//             knife = 1;
//             butter = 1;
//             sausage = bread*4;
//             cheese = bread*2;
//             sandwich = bread;
//         } else {
//             bread = amount;
//             knife = 1;
//             butter = 1;
//             sausage = amount / 2;
//             cheese = bread;
//             sandwich = bread / 2;
//         }
//     }

//     this.clean = function () {
//          bread = 0;
//          knife = 0;
//          butter = 0;
//          sausage = 0;
//          cheese = 0;
//          coocking = false;
//     }

//     this.eat = function() {
//         eat = true;
//     }

//     this.hunger = function() {
//         eat = false;
//         hunger = false;
//         sandwich = 0;
//     }

//     this.checkHunger = function(feel) {
//         if (feel == 1) {
//             hunger = false;
//         } else if (feel == 0) {
//             hunger = true;
//             this.choise()
//         } else return;
//     }

//     this.choise = function(voit){
//         if (voit == 0) {
//             this.take()
//         } else if (voit == 1) {
//             console.log('Подожду до ужина')
//         } else return;
//     }
// }

// let sandwichtotea = SandwichToTea();
