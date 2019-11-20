
const dataModule = (function () {

    class Show {
        constructor(id, name, img) {
            this.id = id;
            this.name = name;
            this.img = img;
        }
    };

    function getAllShows(getShowList) {
        $.get(`http://api.tvmaze.com/shows`, function (responseData) {
            let listAllShows = [];

            for (let i = 0; i < 50; i++) {
                let show = responseData[i];
                let tvShow = new Show(show.id, show.name, show.image.medium);
                listAllShows.push(tvShow);
            };
            getShowList(listAllShows);
        })
    };

    function showSeasons(id, getSeasons) {
        let Seasons = [];
        $.get(`http://api.tvmaze.com/shows/${id}/seasons`, function (responseData) {

            for (let i = 0; i < responseData.length; i++) {
                Seasons.push(`${responseData[i].premiereDate} ~ ${responseData[i].endDate}`);
            };
            getSeasons(Seasons);
        });
    };


    function showCast(id, getCast) {
        let Cast = [];
        $.get(` http://api.tvmaze.com/shows/${id}/cast`, function (responseData) {

            for (let i = 0; i < responseData.length; i++) {
                Cast.push(`${responseData[i].person.name}`);
            };
            getCast(Cast)

        })
    }

    function getSingleShowData(searchId, displaySingleShow) {

        $.get(`http://api.tvmaze.com/shows/${searchId}`, function (showData) {
            // console.log(showData);
            displaySingleShow(showData);
        })
    };

    class Query {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    };

    function searchForShow(searchName, displaySearchList) {
        let searchResult = []
        $.get(`http://api.tvmaze.com/search/shows?q=${searchName}`, function (showData) {
            for (let i = 0; i < 10; i++) {
                let queryResult = new Query(showData[i].show.id, showData[i].show.name);
                searchResult.push(queryResult);
            };
            displaySearchList(searchResult);
        })
    };




    return {
        getAllShows,
        showSeasons,
        showCast,
        getSingleShowData,
        searchForShow
    }

})()
