angular.module('rna', [
    'templates-app',
    'templates-common',
    'rna.home',
    'ui.router',
    'rna.couple',
    'rna.gallery',
    'directive.diHeader',
    'directive.diFooter',
    'rna.guestbook',
    'rna.guestbook.model'
])

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location, $state) {
    smoothScroll.init();

    $scope.getState = function getState() {
        return $state.current.name;
    };
});
