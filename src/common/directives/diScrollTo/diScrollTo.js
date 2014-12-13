/**
* directive.diScrollTo Module
*
* Description
*/
angular.module('directive.diScrollTo', [
    'service.Device',
    'ngTouch'
])
.directive('diScrollTo', [
    'Device',
function(
    Device
){
    var ScrollTo = {};

    ScrollTo.templateUrl = 'directives/diScrollTo/diScrollTo.tpl.html';

    ScrollTo.restrict = 'A';

    ScrollTo.scope = true;

    ScrollTo.replace = true;

    ScrollTo.link = function link(scope, element, attrs) {
        scope.isDevice = function() {
            return Device.device;
        };
    };

    return ScrollTo;
}]);