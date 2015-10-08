(function() {
    'use strict';

    angular
        .module('rna.seat.autocomplete', [])
        .directive('autocomplete', autocomplete);

    function autocomplete($timeout, Guest) {
        return {
            scope: {
                data: '='
            },
            strict: 'AE',
            replace: true,
            templateUrl: 'seat/autocomplete/autocomplete.tpl.html',
            link: link
        };

        ///////////

        function link(scope, element, attrs) {
            var kendoWidget = $(element).kendoAutoComplete({
                dataSource: scope.data,
                filter: "contains",
                dataTextField: "fullName",
                placeholder: "Select your name...",
                template: '<span class="full-name">#: fullName #</span> (group of #: numberOfPeople # people)',
                select: onSelect
            });

            function onSelect(e) {
                var fullName = e.item.find('.full-name').text();
                var guest = _.find(scope.data, function(item) {
                    return item.fullName === fullName;
                });

                Guest.setData(guest);

                if (!scope.$$phase) {
                    scope.$apply();
                }
                // scope.$broadcast('NewGuest', newGuest);
            }
        }
    }
})();