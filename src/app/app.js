angular.module('rna', [
    'templates-app',
    'templates-common',
    'rna.home',
    'ui.router',
    'rna.couple',
    'rna.gallery',
    'rna.timeline',
    'rna.seat',
    'rna.wishlist',
    'directive.diHeader',
    'directive.diFooter',
    'rna.guestbook',
    'rna.guestbook.model',
    'pascalprecht.translate',
    'ngStorage',
    'angulartics',
    'angulartics.google.analytics'
])

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location, $state) {

    $scope.getState = function getState() {
        return $state.current.name;
    };
});
