angular.module('league', [
    'ngRoute',
    'core.friends',
    'core.users',
    'onlineFriends',
    'onlineUsers',
    'onlineDetails',
    'onlineProfile',
    'onlineInfo',
    'footerHolder'
]).controller('NavigationController', function($scope) {
    $scope.menuItems = [
        {
            location: 'home',
            icon: 'home',
            path: '/'
        },
        {
            location: 'users',
            icon: 'users',
            path: '#!users'
        },
        {
            location: 'user',
            icon: 'user',
            path: '#!profile'
        },
        {
            location: 'info',
            icon: 'info-circle',
            path: '#!info'
        }
    ];
    $scope.activeMenu = $scope.menuItems[0];
    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }
})
.config(function($locationProvider, $routeProvider) {
        $routeProvider
        .when("/", {
            template: '<online-friends></online-friends>'
        })
        .when("/users", {
            template: '<online-users></online-users>'
        })
        .when("/profile", {
            template : '<online-profile></online-profile>'
        })
        .when("/detail/:id", {
            template : '<online-details></online-details>'
        })
        .when("/info", {
            template : "<online-info></online-info>"
        });
    });