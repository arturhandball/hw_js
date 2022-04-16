let UserInfo = function(){
    this.name = function(name){
        name = prompt('Введите имя') 
        this.name = name
        this.lastname()
    }
    this.lastname = function(lastname){
        lastname = prompt('Введите Фамилию') 
        this.lastname = lastname;
        this.age()
    }
    this.age = function(age) {
        age = +prompt('Введите возраст')
        if (age <= 0) {
            alert ('Проверьте возраст')
            return this.age()
        } else if (isNaN(age)){
            alert ('Ввели не число')
            return this.age()
        } else if ((age % 1 == 0) != true){
            alert ('Ввели не целое число')
            return this.age()
        } else {
            alert ('Возраст принят')
        }
        this.age = age;
        this.phone()
    }
    this.phone = function (phone){
        phone = prompt('Введите номер телефона');
        this.phone = phone;
        if (phone.length < 7) {
            alert ('Слишком мало символов')
            return  this.phone()
        } else {
            alert ('Номер принят')
        }
        this.email()
    }
    this.email = function (email) {
        email = prompt('Введите адрес электронной почтой');
        this.email = email;
    }    
}

let userA = new UserInfo();
userA.name()

console.log(userA);

console.log(userA.name);
userA.name = 'Peter';
console.log(userA);


