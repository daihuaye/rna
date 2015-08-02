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
    'directive.diNotification',
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

    $scope.$on('rsvp.submitSuccess', function (event, data) {
        $scope.$broadcast('notification.success', data);
    });

    $scope.$on('rsvp.submitFailure', function (event, data) {
        $scope.$broadcast('notification.failure', data);
    });

    //////////////

    function getClassForMapSection () {
        return 'col-md-12';
    }

    function isMobile () {
        return Device.device;
    }
}
