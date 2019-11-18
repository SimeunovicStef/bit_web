var $button = document.querySelector('button');

$button.addEventListener('click', function () {
    // var repoName = 'dingo'
    var url = 'https://dog.ceo/api/breeds/image/random';

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);

    ajax.addEventListener('load', function () {
        const data = JSON.parse(ajax.responseText);


        var img = 

        const $link = document.createElement('a')
        $link.setAttribute('href', img);
        $link.textContent = $repo.name

        document.querySelector('body')
            .append($link)


    })
    ajax.send();

})
