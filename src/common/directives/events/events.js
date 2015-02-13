/**
* directive.events Module
*
* Description
*/
angular.module('directive.events', [])
.directive('events', [
function(
){
    return {
        templateUrl: 'directives/events/events.tpl.html',
        restrict: 'AE',
        scope: true,
        replace: true,
        link: link
    };

    //////////////

    function link(scope, element, attrs) {
        scope.viewDetails = function viewDetails(event) {
            event.preventDefault();
        };
    }

}]);