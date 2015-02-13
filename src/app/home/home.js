angular.module('rna.home', [
    'ui.router',
    'ngTouch',
    'firebase',
    'directive.diBackstrecth',
    'directive.diHeroParties',
    'direcitve.diTimeCountDown',
    'directive.diParallaxBackground',
    'directive.events',
    'directive.diRsvpForm',
    'directive.moments',
    'directive.diGmap',
    'directive.diScrollTo',
    'service.Device'
])
.controller('HomeCtrl', HomeController);

function HomeController($scope, Device, MomentsModel) {
    var vm = this;
    vm.getClassForMapSection = getClassForMapSection;
    vm.isMobile = isMobile;
    MomentsModel.photoNum(5);

    //////////////

    function getClassForMapSection() {
        if (Device.device) {
            return 'col-md-12';
        } else {
            return 'col-md-6';
        }
    }

    function isMobile() {
        return Device.device;
    }
}
