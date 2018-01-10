/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE FRIENDS SCRIPT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/


angular.module('onlineFriends').component('onlineFriends', {
    templateUrl: 'app/online-friends/online-friends.template.html',
    controller: function sdf($scope) {
        $scope.friends = [
            {
                name: 'DoctaG',
                image: 'lux-small.jpg',
                champ: 'Lux',
                status: 1
            },
            {
                name: 'Arc',
                image: 'tris-small.jpg',
                champ: 'Tristana',
                status: 1
            },
            {
                name: 'Forzend',
                image: 'kat-small.jpg',
                champ: 'Katerina',
                status: 1
            },
            {
                name: 'ihasnoface',
                image: 'olaf-small.jpg',
                champ: 'Olaf',
                status: 1
            },
            {
                name: 'Arc',
                image: 'ken-small.jpg',
                champ: 'Kennen',
                status: 1
            },
            {
                name: 'Forzend',
                image: 'jhin-small.jpg',
                champ: 'Jhin',
                status: 1
            },
            {
                name: 'ihasnoface',
                image: 'kog-small.jpg',
                champ: 'Kogmaw',
                status: 1
            }
        ];
    }
});

/*

 */




