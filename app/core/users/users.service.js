angular.
module('core.users').
factory('users', function($http){
    return {
        usersData: function() {
            return [
                {
                    "id": 1,
                    "name": "Xavier",
                    "image": "olaf-small.jpg",
                    "champ": "Olaf",
                    "status": 1
                },
                {
                    "id": 2,
                    "name": "Rapheal",
                    "image": "kog-small.jpg",
                    "champ": "Kogmaw",
                    "status": 1
                },
                {
                    "id": 3,
                    "name": "Faker",
                    "image": "jhin-small.jpg",
                    "champ": "Jhin",
                    "status": 1
                },
                {
                    "id": 4,
                    "name": "Bjergsen",
                    "image": "ez-small.jpg",
                    "champ": "Ezreal",
                    "status": 1
                },
                {
                    "id": 5,
                    "name": "imaqtpie",
                    "image": "lux-small.jpg",
                    "champ": "Lux",
                    "status": 1
                },
                {
                    "id": 6,
                    "name": "Rush",
                    "image": "kat-small.jpg",
                    "champ": "Katerina",
                    "status": 1
                },
                {
                    "id": 7,
                    "name": "hide in bush",
                    "image": "tris-small.jpg",
                    "champ": "Tristana",
                    "status": 1
                },
                {
                    "id": 8,
                    "name": "WarFace",
                    "image": "ken-small.jpg",
                    "champ": "Kennen",
                    "status": 1
                }
            ];
        }
    };
});
