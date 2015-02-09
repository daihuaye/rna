(function() {
    'use strict';

    angular
        .module('rna.guestbook.guestMessage', [])
        .directive('guestMessage', guestMessage);

    function guestMessage($parse) {
        return {
            scope: {
                name: '@',
                message: '@'
            },
            strict: 'AE',
            templateUrl: 'guestbook/guestMessage/guestMessage.tpl.html',
            link: link
        };

        ///////////

        function link(scope, element, attrs) {
        }
    }
})();