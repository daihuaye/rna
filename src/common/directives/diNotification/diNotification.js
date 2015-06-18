(function (module) {

    module.controller('diNotificationController', diNotificationController);
    module.directive('diNotification', diNotification);

    function diNotificationController ($scope, $timeout) {
        var vm = this;
        var isShow = false;
        vm.isShowAlert = isShowAlert;
        vm.message = 'success';

        //////////////

        $scope.$on('notification.success', function () {
            vm.message = 'success';
            toggleShow();
        });

        $scope.$on('notification.failure', function (data) {
            vm.message = 'fail';
            toggleShow();
        });

        function isShowAlert () {
            return isShow;
        }

        function toggleShow () {
            isShow = true;
            $timeout(function () {
                isShow = false;
            }, 5000);
        }
    }

    function diNotification() {
        return {
            restirct: 'AE',
            link: link,
            controller: 'diNotificationController',
            controllerAs: 'nc',
            replace: true,
            templateUrl: 'directives/diNotification/diNotification.tpl.html'
        };

        ///////////

        function link (scope, attrs, element) {
        }
    }
})(angular.module('directive.diNotification', []));