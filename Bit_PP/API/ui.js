
const uiModule = (function () {


    var $inputField = document.querySelector('.search');
    var $nameList = document.querySelector('.list1');



    function getInputText() {
        return $inputField.value;
    };

    function displayUsers(users) {

        for (let i = 0; i < users.length; i++) {

            let user = users[i];
            let slika = $(`<img src="${user.img}" width="100px">`);
            let elem = $(`<li>${user.name}</li>`);
            $(elem).append(slika);
            $($nameList).append(elem);


        }
    }
    return {
        getInputText,
        displayUsers
    };


})()