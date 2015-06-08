angular.module('rna.home', [
    'ui.router',
    'ngTouch',
    'firebase',
    'directive.diBackstrecth',
    'directive.diHeroParties',
    'direcitve.diTimeCountDown',
    'directive.events',
    'directive.diRsvpForm',
    'directive.moments',
    'directive.diGmap',
    'directive.diScrollTo',
    'service.Device',
    'angular.parallaxScroll'
])
.controller('HomeCtrl', HomeController);

function HomeController($scope, Device, MomentsModel) {
    var vm = this;
    vm.getClassForMapSection = getClassForMapSection;
    vm.isMobile = isMobile;
    vm.rsvpStyle = {
        'height': '700px'
    };
    MomentsModel.photoNum(10);

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
