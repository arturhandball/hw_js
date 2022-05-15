const calculate = function(){
    let clear = document.querySelector('.clear')
    let modul = document.querySelector('.modul')
    let procent = document.querySelector('.procent')
    let divide = document.querySelector('.divide')
    let multiply = document.querySelector('.multiply')
    let minus = document.querySelector('.minus')
    let plus = document.querySelector('.plus')
    let split = document.querySelector('.split')
    let result = document.querySelector('.result')
    let allNumbers = document.querySelectorAll('.number')
    let input = document.querySelector('.input')
    let modulDiv = document.getElementById('modul')
    let firstNumber = '';
    let seconfNumber = '';
    let sign = '';
    let finish = '';
    
    let numbers = Array.from(allNumbers)
    
    const clearCalc = function(){
        input.value = '';
        modulDiv.classList.remove('active')
    }
    
    
    clear.addEventListener('click', function(){
        clearCalc();
    })
    
    numbers.forEach(function(num){
        num.addEventListener('click', function(event){
            let number = event.target.innerHTML;
           
            if (event.target.innerHTML == '0' && input.value.includes(split.innerHTML) == false && input.value.length==0) {
                return;
            } else if ((input.value.includes(divide.innerHTML) || input.value.includes(multiply.innerHTML) || input.value.includes(minus.innerHTML) || input.value.includes(plus.innerHTML)) && input.value.indexOf('0') == 1 && input.value.includes(split.innerHTML) == false) {
                return;
            } else if(input.value.includes(procent.innerHTML)){
                return;
            } else {
            input.value += number;}
        })
    })

    divide.addEventListener('click', function(){
        if (input.value.includes(divide.innerHTML) || input.value.includes(multiply.innerHTML) || input.value.includes(minus.innerHTML) || input.value.includes(plus.innerHTML)) return;
        firstNumber = Number(input.value.split(divide.innerHTML)[0])
        sign = divide.innerHTML
        input.value = sign;
        
    })
    multiply.addEventListener('click', function(){
        if (input.value.includes(divide.innerHTML) || input.value.includes(multiply.innerHTML) || input.value.includes(minus.innerHTML) || input.value.includes(plus.innerHTML)) return;
        firstNumber = Number(input.value.split(multiply.innerHTML)[0])
        sign = multiply.innerHTML
        input.value = sign;
        
    })
    minus.addEventListener('click', function(){
        if (input.value.includes(divide.innerHTML) || input.value.includes(multiply.innerHTML) || input.value.includes(minus.innerHTML) || input.value.includes(plus.innerHTML)) return;
        firstNumber = Number(input.value.split(minus.innerHTML)[0])
        sign = minus.innerHTML
        input.value = sign;
    })
    plus.addEventListener('click', function(){
        
        if (input.value.includes(divide.innerHTML) || input.value.includes(multiply.innerHTML) || input.value.includes(minus.innerHTML) || input.value.includes(plus.innerHTML)) return;
        firstNumber = Number(input.value.split(plus.innerHTML)[0])
        sign = plus.innerHTML
        input.value = sign;
    })
    
   
    
    procent.addEventListener('click', function(){
        if (input.value.includes(divide.innerHTML) == false && input.value.includes(multiply.innerHTML) == false && input.value.includes(minus.innerHTML) == false && input.value.includes(plus.innerHTML) == false) {
            finish = Number(input.value) / 100
            input.value = finish
            if (finish == 0) input.value = '';
         } else if (input.value.includes(procent.innerHTML)){
            return;
         }else {
            input.value += procent.innerHTML;
         }
    })
    
    split.addEventListener('click', function(){
    
        if (input.value.includes(split.innerHTML) || input.value.includes(procent.innerHTML)) {
            return;
        } else {
            input.value += split.innerHTML;
        }
    
       if (input.value[0] == '.') {
           input.value = '0.'
       } 
    })
    
    modul.addEventListener('click', function(){
        modulDiv.classList.toggle('active')
    
    })
    
    const sum = function(){
        switch(sign){
            case '+':
                if (modulDiv.classList.contains('active') && seconfNumber.includes(procent.innerHTML) == false){
                firstNumber = firstNumber * -1
                finish = firstNumber + (Number(seconfNumber))
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else if (seconfNumber == '') {seconfNumber = firstNumber
                    finish = firstNumber + (Number(seconfNumber))
                    input.value = finish}
                else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == false) {
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber + (firstNumber/100*seconfNumber)
                input.value = finish
                } else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == true) {
                firstNumber = firstNumber * -1
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber + (firstNumber/100*seconfNumber)
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else { finish = firstNumber + (Number(seconfNumber))
                    input.value = finish}
                if (seconfNumber == '.') input.value = firstNumber;
                if (finish == '0') input.value = '';
                break;
            case '÷':
                if (modulDiv.classList.contains('active') && seconfNumber.includes(procent.innerHTML) == false){
                firstNumber = firstNumber * -1
                finish = firstNumber / (Number(seconfNumber))
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else if (seconfNumber == '') {
                seconfNumber = firstNumber
                finish = firstNumber / (Number(seconfNumber))
                input.value = finish
                } else if (seconfNumber == '0' || seconfNumber == '0.' || seconfNumber == '.') {
                finish = 'Нельзя делить на 0'
                input.value = finish
                }else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == false) {
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber / (firstNumber/100*seconfNumber)
                input.value = finish
                } else if(seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == true) {
                firstNumber = firstNumber * -1
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber / (firstNumber/100*seconfNumber)
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else { finish = firstNumber / (Number(seconfNumber))
                input.value = finish}
                if (finish == '0') input.value = '';
                break;
            case 'x':
                if (modulDiv.classList.contains('active') && seconfNumber.includes(procent.innerHTML) == false){
                firstNumber = firstNumber * -1
                finish = firstNumber * (Number(seconfNumber))
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else if (seconfNumber == '') {seconfNumber = firstNumber
                finish = firstNumber * (Number(seconfNumber))
                input.value = finish}
                else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == false) {
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber * (firstNumber/100*seconfNumber)
                input.value = finish
                } else if(seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == true) {
                firstNumber = firstNumber * -1
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber * (firstNumber/100*seconfNumber)
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else {
                finish = firstNumber * (Number(seconfNumber))
                input.value = finish
                }
                if (finish == '0' || seconfNumber == '.') input.value = '';
                break;
            case '-':
                if ( modulDiv.classList.contains('active') && seconfNumber.includes(procent.innerHTML) == false){
                firstNumber = firstNumber * -1
                finish = firstNumber - (Number(seconfNumber))
                input.value = finish
                modulDiv.classList.remove('active')
                } else if (seconfNumber == '') {
                seconfNumber = firstNumber
                finish = firstNumber - (Number(seconfNumber))
                input.value = finish}
                else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == false) {
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = firstNumber - (firstNumber/100*seconfNumber)
                input.value = finish
                } else if (seconfNumber.includes(procent.innerHTML) && modulDiv.classList.contains('active') == true) {
                firstNumber = firstNumber * -1
                seconfNumber = Number(seconfNumber.split(procent.innerHTML)[0])
                finish = (firstNumber - (firstNumber/100*seconfNumber))
                input.value = finish
                modulDiv.classList.remove('active')
                }
                else {
                finish = firstNumber - (Number(seconfNumber))
                input.value = finish
                }
                if (seconfNumber == '.') input.value = firstNumber;
                if (finish == '0') input.value = '';
                break;

                default:
                return;
            }
    
    }

        result.addEventListener('click', function(){
        if (input.value.includes(divide.innerHTML)) {
            seconfNumber = input.value.split(divide.innerHTML)[1]
        } else if (input.value.includes(multiply.innerHTML)) {
            seconfNumber = input.value.split(multiply.innerHTML)[1]
        } else if (input.value.includes(minus.innerHTML)){
            seconfNumber = input.value.split(minus.innerHTML)[1]
        } else if (input.value.includes(plus.innerHTML)) {
            seconfNumber = input.value.split(plus.innerHTML)[1]
        }else {
           return;
        }
        if (input.value.includes(divide.innerHTML) == false && input.value.includes(multiply.innerHTML) == false && input.value.includes(minus.innerHTML) == false && input.value.includes(plus.innerHTML) == false) {
            return;}
        else { 
            sum();
        }
    })

}
