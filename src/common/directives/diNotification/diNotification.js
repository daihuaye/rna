(function (module) {

    module.controller('diNotificationController', diNotificationController);
    module.directive('diNotification', diNotification);

    function diNotificationController ($scope, $timeout) {
        var vm = this;
        var isShow = false;
        vm.isShowAlert = isShowAlert;
        vm.message = 'success';
        vm.errorMessage = '';

        //////////////

        $scope.$on('notification.success', function () {
            vm.message = 'success';
            toggleShow();
        });

        $scope.$on('notification.failure', function (event, data) {
            vm.message = 'fail';
            vm.errorMessage = data;
            toggleShow();
        });

        function isShowAlert () {
            return isShow;
        }

        function toggleShow () {
            isShow = true;
            $timeout(function () {
                isShow = false;
            }, 10000);
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