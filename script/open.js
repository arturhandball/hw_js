const open = function(){
    let openImg = document.querySelector('.openimg>img');
    let textImg = document.querySelector('.altenative');
    let box = document.querySelector('.gallery');
    const allImg = document.querySelectorAll('.image>span>img');

    let itemImg = Array.from(allImg);

    let fullImg = function(img){
        openImg.src = img.src;
        textImg.innerHTML = img.alt;
        document.querySelector('.openimg').classList.add('active')

        let closeElem = document.querySelector('.closeimg')
        closeElem.addEventListener('click', function(){
            document.querySelector('.openimg').classList.remove('active')
        })

    }

    itemImg.forEach(function(image){
        image.addEventListener('click', function(){
            fullImg(this)
        })
    })





}