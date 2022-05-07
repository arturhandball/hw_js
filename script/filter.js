const filter = function() {
    const filterItem = document.querySelector('.items');
    const filterImg = document.querySelectorAll('.image')

    filterItem.addEventListener('click', function(selectItem){
        if (selectItem.target.classList.contains("item")) {

            filterItem.querySelector('.active').classList.remove('active');

            selectItem.target.classList.add('active');

            let nameFilter = selectItem.target.getAttribute('data-name');


            filterImg.forEach(function(image){
                let imagesShow = image.getAttribute('data-name');
                if((imagesShow == nameFilter) || nameFilter == 'All'){
                    image.classList.add('show')
                    image.classList.remove('hidden')
                } else {
                    image.classList.add('hidden')
                    image.classList.remove('show')
                }
            })
        }
    })

    const preview = function(element){
        let preview = document.querySelector('.preview')
        let previewImg = preview.querySelector('img')
        let closePreview = preview.querySelector('span')

        preview.classList.add('show')

        closePreview.addEventListener('click', function(){
            preview.classList.remove('show')

        })

        let selectImg = element.querySelector('img').src;
        previewImg.src = selectImg

    }

    imageItems = Array.from(filterImg)

    imageItems.forEach(function(e){
        e.addEventListener('dblclick', function(event){
            preview(this)
        })
    })

}