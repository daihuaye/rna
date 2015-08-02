(function() {
    'use strict';

    angular
        .module('rna')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $translateProvider) {
        // langulage
        $translateProvider
        .useStaticFilesLoader({
            prefix: '/assets/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');

        // url
        $stateProvider
        .state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    controllerAs: 'home',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data: {
                pageTitle: 'Home'
            }
        })

        .state('couple', {
            url: '/couple/:who',
            views: {
                'main': {
                    controller: 'CoupleCtrl',
                    controllerAs: 'couple',
                    templateUrl: 'couple/couple.tpl.html'
                }
            }
        })

        .state('guestbook', {
            url: '/guestbook',
            views: {
                'main': {
                    controller: 'GuestbookCtrl',
                    controllerAs: 'guestbook',
                    templateUrl: 'guestbook/guestbook.tpl.html'
                }
            }
        })

        .state('gallery', {
            url: '/gallery',
            views: {
                'main': {
                    controller: 'GalleryCtrl',
                    controllerAs: 'gallery',
                    templateUrl: 'gallery/gallery.tpl.html'
                }
            }
        })

        .state('wishlist', {
            url: '/wishlist',
            views: {
                'main': {
                    controller: 'WishlistCtrl',
                    controllerAs: 'wishlist',
                    templateUrl: 'wishlist/wishlist.tpl.html'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }
})();