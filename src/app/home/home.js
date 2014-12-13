angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'ngTouch',
  'directive.diHeader',
  'directive.diBackstrecth',
  'directive.diHeroParties',
  'direcitve.diTimeCountDown',
  'directive.diParallaxBackground',
  'directive.diIsotopeGrid',
  'directive.diRsvpForm',
  'directive.diJustifiedGallery',
  'directive.diGmap',
  'directive.diScrollTo'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
.controller( 'HomeCtrl', function HomeController( $scope ) {
    var vm = this;
});

