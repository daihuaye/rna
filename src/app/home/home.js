angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'directive.diHeader',
  'directive.diBackstrecth',
  'directive.diHeroParties',
  'direcitve.diTimeCountDown',
  'directive.diParallaxBackground',
  'directive.diIsotopeGrid',
  'directive.diRsvpForm',
  'directive.diJustifiedGallery',
  'directive.diGmap'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
.controller( 'HomeCtrl', function HomeController( $scope ) {
});

