(function() {
    'use strict';

    angular
        .module('rna')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
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

        .state('gallery', {
            url: '/gallery',
            views: {
                'main': {
                    controller: 'GalleryCtrl',
                    controllerAs: 'gallery',
                    templateUrl: 'gallery/gallery.tpl.html'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }
})();