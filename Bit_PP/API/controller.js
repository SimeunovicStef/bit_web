
const ctrlModule = (function (ui, data) {

    const $searchButton = document.querySelector('.button');
    $searchButton.addEventListener('click', onSearchHandler);


    function onSuccessHandler(users) {

        ui.displayUsers(users)


    }

    function onSearchHandler() {

        let searchText = ui.getInputText();
        data.getSearchText(searchText, onSuccessHandler)

    }
})(uiModule, dataModule)