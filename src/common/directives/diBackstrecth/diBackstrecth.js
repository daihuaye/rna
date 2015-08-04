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
            'assets/images/home-sliding-images/sliding1.JPG',
            'assets/images/home-sliding-images/sliding2.JPG',
            'assets/images/home-sliding-images/sliding3.JPG',
            'assets/images/home-sliding-images/sliding4.JPG'
        ], {duration: 3000, fade: 750, centeredY: false});

        if (Device.device) {
            $(element).addClass('ra-mobile-backstretch');
        } else {
            $(element).removeClass('ra-mobile-backstretch');
        }
    };

    return Backstrecth;
}]);