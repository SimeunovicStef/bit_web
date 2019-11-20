const ctrlModule = (function (ui, data) {

    $('input#search').on("keyup", searchShow);



    function getShowList(list) {
        ui.displayShows(list);
        let topShowList = ui.getDivShows();
        for (let i = 0; i < topShowList.length; i++) {
            $(topShowList[i]).on("click", singleShowInfo);

        };
    };

    function displaySingleShow(show) {
        ui.displayShowInfo(show);
    };
    function singleShowInfo() {
        $('.menu').css("display", "none");
        $('input#search').val("");
        data.getSingleShowData(this.getAttribute("data-id"), displaySingleShow);
        data.showSeasons(this.getAttribute("data-id"), getSeasons);
        data.showCast(this.getAttribute("data-id"), getCast)
    };

    function getSeasons(seasons) {
        ui.displaySeasons(seasons);
    };

    function getCast(Cast) {
        ui.displayCast(Cast)

    };

    function searchShow() {
        $('.menu').css("display", "inline-Block")
        let result = ui.getSearchData();
        data.searchForShow(result, displaySearchResult);
    };

    function displaySearchResult(resultList) {
        ui.displayMenu(resultList, setEventsOnListItems);
    };


    function setEventsOnListItems(elementArray) {
        for (let i = 0; i < elementArray.length; i++) {
            $(elementArray[i]).on("click", singleShowInfo);

        }
    };



    function init() {


        data.getAllShows(getShowList);

    }

    return {
        init
    }

})(uiModule, dataModule)