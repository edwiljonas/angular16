/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE DETAIL COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

angular.module('onlineDetails').component('onlineDetails', {
    templateUrl: 'app/online-detail/online-detail.template.html',
    controller: function onlineDetails($scope, $routeParams, $http) {
        $scope.title = 'User Details';
        $http.get('app/json/friends.json').then(function (response) {
            var data = response.data;
            $scope.friend = data.filter(function(entry){
                return entry.id === parseInt($routeParams.id);
            })[0];
        });
    }
});
