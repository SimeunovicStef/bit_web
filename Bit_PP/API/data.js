const dataModule = (function () {
    class User {
        constructor(id, name, img) {
            this.id = id
            this.name = name
            this.img = img
        }
    };



    function getSearchText(text, onSuccess) {
        const searchUrl = `https://api.github.com/search/users?q=${text}`;


        $.get(searchUrl, function (data) {
            const usersLIst = data.items

            const myUsers = []

            for (var i = 0; i < usersLIst.length; i++) {
                const userData = usersLIst[i]


                const user = new User(userData.id, userData.login, userData.avatar_url)
                myUsers.push(user)
            }
            onSuccess(myUsers)
        })
    }

    return {
        getSearchText
    }



})()