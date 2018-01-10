/*
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^ ONLINE USERS COMPONENT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

angular.module('onlineUsers').component('onlineUsers', {
    template: 'All Users',
    controller: function GreetUserController() {
        this.user = 'Users';
    }
});
