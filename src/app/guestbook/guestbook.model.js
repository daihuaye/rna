(function() {
    'use strict';

    angular
        .module('rna.guestbook.model', ['firebase'])
        .factory('GuestbookModel', GuestbookModel);

    function GuestbookModel($firebase, $q, $http) {
        var url = 'https://rna.firebaseio.com/';
        var schema = {
            guest: []
        };

        return {
            guest: guest
        };

        ////////////////

        function guest(options) {
            var deferred = $q.defer(),
                guestURL = url + 'guest.json';
            if (angular.isDefined(options)) {
                $http
                    .post(guestURL, options)
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data) {
                        deferred.reject(data);
                    });

            } else {
                $http
                    .get(guestURL)
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data) {
                        deferred.reject(data);
                    });
            }
            return deferred.promise;
        }
    }

})();