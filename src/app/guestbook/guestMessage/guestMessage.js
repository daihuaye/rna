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
            replace: true,
            templateUrl: 'guestbook/guestMessage/guestMessage.tpl.html',
            link: link
        };

        ///////////

        function link(scope, element, attrs) {
            var listClass = ['note-green', 'note-yellow', 'note-blue', 'note-pink'];
            var index = parseInt(attrs.index, 10) % 4;
            scope.randomClass = function () {
                return listClass[index];
            };
        }
    }
})();