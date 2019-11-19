
const dataModule = (function () {

    class Show {
        constructor(id, name, img) {
            this.id = id
            this.name = name
            this.img = img
        }
    };

    function getAllShows(getShowList) {
        $.get(`http://api.tvmaze.com/shows`, function (responseData) {
            let listAllShows = [];

            for (let i = 0; i < 50; i++) {
                let show = responseData[i];
                let tvShow = new Show(show.id, show.name, show.image);
                listAllShows.push(tvShow);
            };
            console.log(listAllShows);
            getShowList(listAllShows);
        })
    };




    // function makeShowList() {

    // }
    return {
        getAllShows,
    }
})()
