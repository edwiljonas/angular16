/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE USERS COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

angular.module('footerHolder').component('footerHolder', {
    templateUrl: 'app/footer-holder/footer-holder.template.html',
    controller: function FooterController($scope) {
        $scope.footer = 'Developed by Edwil Jonas';
    }
});
