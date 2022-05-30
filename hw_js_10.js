let DOM = function() {

    this.create = (tagName) => {
        return document.createElement(tagName);
    }
    this.attr = (element, name, value = '') => { 
        if(value) element.setAttribute(name, value);
        return element.getAttribute(name);
    }
    this.html = (element, value = '') => { 
        if(value) element.innerHTML = value;
        return element.innerHTML;
    }
    this.search = (element, selector) => { 
        return element.querySelector(selector);
    }
    this.addClass = (element, className) => {
        element.classList.add(className);
    }
    this.removeClass = (element, className) => {
        element.classList.remove(className);
    }
    this.toggleClass = (element, className) => {
        element.classList.toggle(className);
    }
    this.hasClass = (element, className) => {//для проверки существования класса в элементе (должен вернуть true или false);
        let result = false;
        element.classList.forEach((elem) => {
            console.log(elem, className);
            if(elem === className) result = true;
        });
        return result;
    }
    this.append = (element, newElement, [beforeElement]) => {
        if(!beforeElement) element.append(newElement);
        else beforeElement.before(newElement);
    }
    this.on = (element, eventName, funcName) => {
       element.addEventListener(`${eventName}`, funcName(event))
    }
}