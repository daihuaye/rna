(function (){
    'use strict';

    angular
        .module('rna.gallery', [
            'directive.moments',
            'infinite-scroll'
        ])
        .controller('GalleryCtrl', GalleryCtrl)
        .factory('WeddingPhotos', WeddingPhotos)
        .factory('WeddingVideos', WeddingVideos);

    WeddingVideos.$inject = ['$http', '$firebaseAuth', '$firebaseObject'];

    function GalleryCtrl($state, photoNames, WeddingPhotos, $scope, $document, WeddingVideos, $sce) {
        var vm = this;
        var imageIndex = 0;
        var names = _.map(photoNames.data, function(name) {
            return "http://rna.com.s3.amazonaws.com/wedding/" + name;
        });
        vm.wedding = new WeddingPhotos(names);
        vm.videos = new WeddingVideos();
        vm.isBusy = false;
        vm.getWhichPage = getWhichPage;
        vm.googleLogin = googleLogin;
        vm.isAuth = isAuth;
        vm.getVideoLinks = getVideoLinks;
        vm.getLink = getLink;
        vm.next = function next() {
            var photos = vm.wedding.Next();
            if (photos.length > 0) {
                vm.isBusy = true;
                $scope.$broadcast('NextImages', photos);
            }
        };

        $document.bind('cbox_complete', function(e) {
            var el = $.colorbox.element();
            imageIndex = el.data('index');
            nextImage();
        });

        $scope.$on('cbox_next', function(event, data) {
            nextImage();
        });

        $scope.$on('moment_images_loaded', function() {
            vm.isBusy = false;
        });

        function nextImage() {
            var max = $('.ra-gallery').find('img').length;
            if(imageIndex + 5 >= max) {
                vm.next();
            }
        }

        function getWhichPage() {
            return $state.params.type;
        }

        function googleLogin() {
            vm.videos.firebaseAuthLogin();
        }

        function logout() {
            vm.videos.logout();
        }

        function isAuth() {
            return vm.videos.isAuth();
        }

        function getVideoLinks() {
            return vm.videos.getLinks();
        }

        function getLink(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }

    function WeddingPhotos() {
        var delta = 10;
        var Photos = function (items) {
            this.items = items;
            this.nextNum = 11;
            this.photos = items.slice(0, 10);
        };

        Photos.prototype.Next = function() {
            var nextN = this.nextNum + delta;
            var nextPhotos = this.items.slice(this.nextNum, (nextN > this.items.length) ? this.items.length : nextN);
            this.nextNum = nextN;
            this.photos = _.union(this.photos, nextPhotos);
            return nextPhotos;
        };
        return Photos;
    }

    function WeddingVideos($http, $firebaseAuth, $firebaseObject) {
        var ref = new Firebase("https://rna.firebaseio.com");
        var authObj = $firebaseAuth(ref);
        var user = {};
        var videoLinks = [];

        var Videos = function () {

            authObj.$onAuth(authDataCallback);
        };

        Videos.prototype.logout = function() {
            ref.unauth();
            $state.go('home');
        };

        Videos.prototype.getLinks = function() {
            return videoLinks;
        };

        Videos.prototype.isAuth = function() {
            return authObj.$getAuth();
        };

        Videos.prototype.firebaseAuthLogin = function() {
            authObj.$authWithOAuthPopup("google", {scope: "email"})
            .then(function(authData) {
                if (authData) {
                    console.log("Authenticated successfully with provider " + provider +" with payload:", authData);
                }
            }, function (error) {
                console.error("Authentication failed:", error);
            });
        };

        function getVideoLinks() {
            videoLinks = $firebaseObject(ref.child('videoLinks'));
            videoLinks.$loaded().then(function() {
                var links = _.filter(videoLinks, function(link) {
                    if (angular.isString(link)) {
                        return link.indexOf('http') >= 0;
                    }
                    return false;
                });
                return links;
            });
        }

        function authDataCallback(authData) {
            if (authData) {
                user = $firebaseObject(ref.child('users').child(authData.uid));
                user.$loaded().then(function () {
                    if (angular.isUndefined(user.name)) {
                        var newUser = {};
                        if (authData.google) {
                            newUser.name = authData.google.displayName;
                        }
                        user.$ref().set(newUser);
                    }
                });
                getVideoLinks();
            }
        }

        return Videos;
    }
})();