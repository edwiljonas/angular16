angular.module('league', [])
    .controller('NavigationController', ['$route', '$routeParams', '$location',
        function NavigationController($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
        }]);