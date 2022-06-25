import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
class App {

    create(){
        this.elem = document.createElement('div')
        this.elem.classList.add('app')

        return this.elem
    }

    init() {

        this.create()
        
        this.elem.append(Header, Main, Footer)
        
        return this.elem
    }
}

export default new App().init()

if (window.location.pathname == '/index.html') window.location.href = 'http://127.0.0.1:5500/'