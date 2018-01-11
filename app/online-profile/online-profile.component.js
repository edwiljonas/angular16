/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE PROFILE COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

angular.module('onlineProfile').component('onlineProfile', {
    templateUrl: 'app/online-profile/online-profile.template.html',
    controller: function onlineProfile($scope, $http) {
        $scope.title = 'My Profile';
        $http.get('app/json/profile.json').then(function(response) {
            $scope.user = response.data[0];
        });
    }
});
