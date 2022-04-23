let meta = document.createElement('meta')
meta.setAttribute('charset','UTF-8')

let meta1 = document.createElement('meta')
meta1.setAttribute('name', 'viewport')
meta1.setAttribute('content', "width=device-width")
meta1.setAttribute('initial-scale', "1.0")

let meta2 = document.createElement('meta')
meta2.setAttribute('http-equiv', 'X-UA-Compatible')
meta2.setAttribute('content', 'IE=edge')
document.head.appendChild(meta)
document.head.appendChild(meta1)
document.head.appendChild(meta2)


let lang = document.querySelector('html')
lang.setAttribute('lang', "en");

let title = document.createElement('title')
title.innerHTML = 'hw_js_8'
document.head.appendChild(title)

let fonts = document.createElement('link')
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet')
fonts.setAttribute('rel', 'stylesheet')
document.head.appendChild(fonts)

let divTitle = document.createElement('div')
divTitle.classList.add('divTitle')
document.body.appendChild(divTitle)

let h2Title = document.createElement('h2')
h2Title.innerHTML = 'Choose Your Option'
h2Title.classList.add('h2title')
divTitle.appendChild(h2Title)

let pTitle = document.createElement('p')
pTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
pTitle.classList.add('ptitle')
divTitle.appendChild(pTitle)

let divtable = document.createElement('div')
document.body.appendChild(divtable)
divtable.classList.add('divtable')

let divleft = document.createElement('div')
divtable.appendChild(divleft)
divleft.classList.add('divwrap')

let divright = document.createElement('div')
divtable.appendChild(divright)
divright.classList.add('divwrap')

let pLeftTop = document.createElement('p')
pLeftTop.classList.add('pTop')
pLeftTop.innerHTML = 'freelancer'.toLocaleUpperCase()
divleft.appendChild(pLeftTop)

let h3Left = document.createElement('h3')
h3Left.classList.add('h3Table')
h3Left.innerHTML = 'Initially designed to'
divleft.appendChild(h3Left)

let pLeftMid = document.createElement('p')
pLeftMid.classList.add('pMid')
pLeftMid.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
divleft.appendChild(pLeftMid)

let linkLeft = document.createElement('a')
linkLeft.classList.add('link')
linkLeft.setAttribute('href', '#')
linkLeft.innerHTML = 'START HERE'.toLocaleUpperCase()
divleft.appendChild(linkLeft)

let pRiTop = document.createElement('p')
pRiTop.classList.add('pTop')
pRiTop.innerHTML = 'STUDIO'.toLocaleUpperCase()
divright.appendChild(pRiTop)

let h3Right = document.createElement('h3')
h3Right.classList.add('h3Table')
h3Right.innerHTML = 'Initially designed to'
divright.appendChild(h3Right)

let pRightMid = document.createElement('p')
pRightMid.classList.add('pMid')
pRightMid.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
divright.appendChild(pRightMid)

let linkRight = document.createElement('a')
linkRight.classList.add('link')
linkRight.setAttribute('href', '#')
linkRight.innerHTML = 'START HERE'.toLocaleUpperCase()
divright.appendChild(linkRight)

let style = document.createElement('style')

style.innerHTML = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.divTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
}

.h2title {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 35px;
    color: #212121;
    font-family: 'Arvo', serif;
}

.ptitle {
    font-size: 14px;
    line-height: 24px;
    color: #9FA3A7;
    font-family: 'Arvo', serif;
}

.divtable {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 55px;
    margin-bottom: 100px;
    border: 1px solid #E8E9ED;
    border-radius: 5px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.divwrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding-top: 85px;
    padding-bottom: 85px;
}

.pTop {
    font-size: 12px;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    font-weight: bold;
    margin-bottom: 35px;
    font-family: 'Arvo', serif;
}

.h3Table {
    font-size: 36px;
    line-height: 46px;
    color: #212121;
    width: 210px;
    text-align: center;
    margin-bottom: 45px;
    font-family: 'Arvo', serif;
}

.pMid {
    color: #9FA3A7;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    width: 210px;
    margin-bottom: 70px;
    font-family: 'Arvo', serif;
}

.link {
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #212121;
    text-decoration: none;
    border: 3px solid #FFC80A;
    border-radius: 25px;
    font-size: 12px;
    letter-spacing: 2.4px;
    font-family: 'Arvo', serif;
}

.divwrap:hover {
    background-color: #8F75BE;
}

.divwrap:hover .pTop {
    color: #FFC80A;
}

.divwrap:hover .h3Table,
.divwrap:hover .pMid,
.divwrap:hover .link {
    color: #fff;
}
`;

document.head.appendChild(style)
