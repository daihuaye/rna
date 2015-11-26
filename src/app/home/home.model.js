(function() {
    'use strict';

    angular
        .module('rna.home.model', ['firebase'])
        .factory('HomeModel', HomeModel);

    HomeModel.$inject = ['$firebase', '$q', '$http'];

    function HomeModel($firebase, $q, $http) {
        var url = 'https://rna.firebaseio.com/';
        var ref = new Firebase(url);
        var schema = {
            rsvp: []
        };

        return {
            rsvp: rsvp,
            createNewUser: createNewUser,
            getGalleryNum: getGalleryNum
        };

        ////////////////

        function rsvp(options) {
            var deferred = $q.defer();
            if (angular.isDefined(options)) {
                createNewUser(options)
                .then(function (data) {
                    var rsvpURL = url + 'rsvp.json';
                    $http
                        .post(rsvpURL, options)
                        .success(function() {
                            deferred.resolve(data);
                        })
                        .error(function(data) {
                            deferred.reject(data);
                        });
                }, function (data) {
                    deferred.reject(data);
                });

            }
            return deferred.promise;
        }

        function createNewUser(options) {
            var defer = $q.defer();
            ref.createUser(options, function(error, userData) {
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            defer.reject("The email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            defer.reject("The specified email is not a valid email.");
                            break;
                        default:
                            defer.reject("Error creating user:", error);
                    }
                } else {
                    defer.resolve("Good News! We will send you summary of event detail and notification when the event is comming!");
                }
            });
            return defer.promise;
        }

        function getGalleryNum() {
            return 5;
        }
    }

})();
