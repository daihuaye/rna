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
  'directive.diScrollTo',
  'service.Device'
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
.controller( 'HomeCtrl', HomeController);

HomeController.$inject = ['$scope', 'Device'];

function HomeController( $scope, Device ) {
    var vm = this;
    vm.isDevice = isDevice;

    //////////////
    
    function isDevice() {
        if (Device.device) {
            return 'col-md-12';
        } else {
            return 'col-md-6';
        }
    }
}

