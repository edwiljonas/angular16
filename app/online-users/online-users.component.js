/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE USERS COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

// This illustrates the FACTORY function.

angular.module('onlineUsers').component('onlineUsers', {
    templateUrl: 'app/online-users/online-users.template.html',
    controller: function onlineFriends($scope, $http, users) {
        $scope.title = 'Users Currently Online';
        $scope.users = users.usersData();
    }
});
