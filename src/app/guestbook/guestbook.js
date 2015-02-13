(function () {
    'use strict';

    angular
        .module('rna.guestbook', [
            'directive.diParallaxBackground',
            'rna.guestbook.guestMessage',
            'rna.guestbook.model',
            'rna.filters.reverse',
            'service.Device'
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