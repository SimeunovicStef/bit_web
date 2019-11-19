const cntrlModule = (function (ui, data) {


    data.getAllShows(getShowList);


    function getShowList(list) {
        console.log(list);
        return list;
    };





})(uiModule, dataModule)