var $button = document.querySelector('button');

$button.addEventListener('click', function () {

    var url = 'https://dog.ceo/api/breeds/image/random';

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);

    ajax.addEventListener('load', function () {
        const data = JSON.parse(ajax.responseText);
        const link = data.message



        const image = document.createElement('img')
        image.setAttribute('src', link);


        document.querySelector('body')
            .append(image)


    })
    ajax.send();

})
