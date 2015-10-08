(function() {
    'use strict';

    angular
        .module('rna.service.guest', [])
        .factory('Guest', GuestModel);

    function GuestModel() {
        var Guest = {
            data: null
        };

        Guest.setData = function(data) {
            if (angular.isDefined(data) && data !== null) {
                Guest.data = data;
            }
        };

        Guest.getFullName = function() {
            return Guest.data.fullName;
        };

        return Guest;
    }
})();