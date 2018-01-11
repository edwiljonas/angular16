angular.
module('core.friends').
factory('friends', function($http){
    // return {
    //     list: function(callback){
    //         $http.get('app/json/friends.json').then(function (response) {
    //             console.log(response);
    //             callback =  response.data;
    //         });
    //     }
    // };
    return {
        friendsData: function() {
            return [
                {
                    "id": 1,
                    "name": "DoctaG",
                    "image": "lux-small.jpg",
                    "champ": "Lux",
                    "status": 1
                },
                {
                    "id": 2,
                    "name": "Arc",
                    "image": "tris-small.jpg",
                    "champ": "Tristana",
                    "status": 1
                },
                {
                    "id": 3,
                    "name": "ihasnoface",
                    "image": "kat-small.jpg",
                    "champ": "Katerina",
                    "status": 1
                },
                {
                    "id": 4,
                    "name": "Forzend",
                    "image": "ken-small.jpg",
                    "champ": "Kennen",
                    "status": 1
                },
                {
                    "id": 5,
                    "name": "WarMachine",
                    "image": "olaf-small.jpg",
                    "champ": "Olaf",
                    "status": 1
                }
            ];
        }
    };
});
