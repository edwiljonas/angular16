/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE FRIENDS SCRIPT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

// This illustrates the JSON get function.

angular.module('onlineFriends').component('onlineFriends', {
    templateUrl: 'app/online-friends/online-friends.template.html',
    controller: function onlineFriends($scope, $http, friends) {
        var self = this;
        $scope.title = 'Friends Online';
        $http.get('app/json/friends.json').then(function(response) {
            $scope.friends = response.data;
        });
    }
});
