import App from "./App.js"
class Root {
    create() {
        this.elem = document.createElement('div')
        this.elem.setAttribute('id', 'root')
    }
    render (){
        document.body.append(this.elem)
        this.elem.append(App)
    }

    init(){
        this.create()
        this.render()
    }
}

export default new Root().init()
