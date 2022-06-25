class Head {
    #data = []
    create() {
        let meta = document.createElement('meta')
        meta.setAttribute('charset','UTF-8')
        this.#data.push(meta)

        let meta1 = document.createElement('meta')
        meta1.setAttribute('name', 'viewport')
        meta1.setAttribute('content', "width=device-width")
        meta1.setAttribute('initial-scale', "1.0")
        this.#data.push(meta1)

        let meta2 = document.createElement('meta')
        meta2.setAttribute('http-equiv', 'X-UA-Compatible')
        meta2.setAttribute('content', 'IE=edge')
        this.#data.push(meta2)

        let fonts = document.createElement('link')
        fonts.setAttribute('rel', 'stylesheet')
        fonts.setAttribute('href', './css/style.css')
        this.#data.push(fonts)

    }

    render() {
        this.#data.forEach(element => {
           return document.head.append(element)
        })
    }

    init() {
        this.create()
        this.render()
    }
}

export default new Head().init()