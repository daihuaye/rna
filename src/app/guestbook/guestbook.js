// rna.guestbook Module

(function (module) {
    'use strict';

    module.controller('GuestbookCtrl', GuestbookCtrl);

    function GuestbookCtrl(GuestbookModel, Device, $scope, $timeout) {
        var vm = this,
            submitted = false,
            sumbitSuccess = false,
            url = 'https://rna.firebaseio.com/',
            ref = new Firebase(url + 'guest');
        vm.isMobile = isMobile;
        vm.addMessage = addMessage;
        vm.interacted = interacted;
        vm.isSubmitting = isSubmitting;
        vm.isSuccess = isSuccess;
        vm.resend = resend;
        vm.message = {
            name: '',
            message: ''
        },
        vm.titleStyle = {
            'height': '250px'
        };
        vm.messages = {};

        ref.on('value', function (snapshot) {
            if (snapshot.val() && _.keys(snapshot.val()).length > 0) {
                _(snapshot.val()).chain()
                    .keys()
                    .difference(_.keys(vm.messages))
                    .forEach(function (hashKey) {
                        vm.messages[hashKey] = snapshot.val()[hashKey];
                    });
                if (!$scope.$$phase) {
                    $scope.$digest();
                }
            }
        }, function (errorObject) {
            vm.messages = {};
            console.log("The read failed: " + errorObject.code);
        });

        //////////////

        function isMobile() {
            return Device.device;
        }

        function interacted (field) {
            return submitted || field.$dirty;
        }

        function isSubmitting () {
            return submitted;
        }

        function isSuccess () {
            return sumbitSuccess;
        }

        function resend () {
            sumbitSuccess = false;
        }

        function addMessage(valid) {
            if(!valid) {
                console.log('invalid');
                return;
            }
            submitted = true;
            var notificationMsg = '';

            GuestbookModel
            .guest(vm.message)
            .then(function(data) {
                // vm.messages[data.key] = data.value;
                vm.message = {};
                submitted = false;
                notificationMsg = 'Your message is sent.';
                $scope.$broadcast('notification.success', notificationMsg);
                sumbitSuccess = true;
            }, function(data) {
                submitted = false;
                sumbitSuccess = false;
                notificationMsg = 'Please wait, we are working on the issue.';
                $scope.$broadcast('notification.failure', notificationMsg);
            });
        }
    }
})(angular.module('rna.guestbook', [
    'rna.guestbook.guestMessage',
    'rna.guestbook.model',
    'rna.filters.reverse',
    'service.Device',
    'angular.parallaxScroll',
    'directive.diNotification',
    'ngMessages',
    'ngAnimate'
]));