(function() {
    'use strict';

    angular
        .module('rna.home.model', ['firebase'])
        .factory('HomeModel', HomeModel);

    HomeModel.$inject = ['$firebase', '$q', '$http'];

    function HomeModel($firebase, $q, $http) {
        var url = 'https://rna.firebaseio.com/';
        var ref = new Firebase("https://rna.firebaseio.com");
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
                        .success(function(data) {
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
                            defer.reject("The new user account cannot be created because the email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            defer.reject("The specified email is not a valid email.");
                            break;
                        default:
                            defer.reject("Error creating user:", error);
                    }
                } else {
                    defer.resolve("Successfully created user account with uid:", userData.uid);
                }
            });
            return defer.promise;
        }

        function getGalleryNum() {
            return 5;
        }
    }

})();
