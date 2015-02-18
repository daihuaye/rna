(function () {
    'use strict';

    angular
        .module('rna.guestbook', [
            'rna.guestbook.guestMessage',
            'rna.guestbook.model',
            'rna.filters.reverse',
            'service.Device',
            'angular.parallaxScroll'
        ])
        .controller('GuestbookCtrl', GuestbookCtrl);

    function GuestbookCtrl(GuestbookModel, messages, Device) {
        var vm = this;
        vm.isMobile = isMobile;
        vm.addMessage = addMessage;
        vm.message = {
            name: '',
            message: ''
        },
        vm.titleStyle = {
            'height': '250px'
        },
        vm.messages = messages;

        //////////////

        function isMobile() {
            return Device.device;
        }

        function addMessage(valid) {
            if(!valid) {
                console.log('invalid');
                return;
            }

            GuestbookModel
            .guest(vm.message)
            .then(function(data) {
                vm.messages[data.name] = vm.message;
                vm.message = {};
            }, function() {
                console.log('failure');
            });
        }
    }
})();