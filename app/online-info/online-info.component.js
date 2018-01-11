/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE INFO COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

angular.module('onlineInfo').component('onlineInfo', {
    templateUrl: 'app/online-info/online-info.template.html',
    controller: function onlineInfo($scope) {
        $scope.title = 'Documentation';
    }
});
