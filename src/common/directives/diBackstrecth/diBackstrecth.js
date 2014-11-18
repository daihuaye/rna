/**
* directive.diBackstrecth Module
*
* Description
*/
angular.module('directive.diBackstrecth', [
    'service.Device'
])
.directive('diBackstrecth', [
    'Device',
function(
    Device
){
    var Backstrecth = {};

    Backstrecth.restrict = 'A';

    Backstrecth.scope = true;

    Backstrecth.replace = true;

    Backstrecth.link = function link(scope, element, attrs) {

        $(element).backstretch([
            'assets/images/hero1.jpg',
            'assets/images/hero2.jpg',
            'assets/images/hero3.jpg'
        ], {duration: 3000, fade: 750, height: 400});

        if (Device.device) {
            $(element).addClass('ra-mobile-backstretch');
        } else {
            $(element).removeClass('ra-mobile-backstretch');
        }
    };

    return Backstrecth;
}]);