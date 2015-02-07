(function() {
    'use strict';

    angular
        .module('rna.home.model', ['firebase'])
        .factory('HomeModel', HomeModel);

    HomeModel.$inject = ['$firebase', '$q', '$http'];

    function HomeModel($firebase, $q, $http) {
        var url = 'https://rna.firebaseio.com/';
        var schema = {
            rsvp: []
        };

        return {
            rsvp: rsvp,
            getGalleryNum: getGalleryNum
        };

        ////////////////

        function rsvp(options) {
            var deferred = $q.defer();
            if (angular.isDefined(options)) {
                var rsvpURL = url + 'rsvp.json';
                $http
                    .post(rsvpURL, options)
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data) {
                        deferred.reject(data);
                    });

            }
            return deferred.promise;
        }

        function getGalleryNum() {
            return 5;
        }
    }

})();