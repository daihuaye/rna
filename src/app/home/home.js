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

function HomeController($scope, Device) {
    var vm = this;
    vm.getClassForMapSection = getClassForMapSection;
    vm.isMobile = isMobile;
    vm.rsvpStyle = {
        'height': '800px'
    };
    vm.photos = _.map([1,2,3,4,5,6,7,8,9,10], function(num) {
        return "http://rna.com.s3.amazonaws.com/yeswemarry/our-story-images/" + num + '.JPG';
    });

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
