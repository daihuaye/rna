/**
* direcitve.diTimeCountDown Module
*
* Description
*/
angular.module('direcitve.diTimeCountDown', [])
.directive('diTimeCountDown', [
function(
){
    var TimeCountDown = {};

    TimeCountDown.restrict = 'A';

    TimeCountDown.replace = true;

    TimeCountDown.scope = true;

    TimeCountDown.link = function link(scope, element, attrs) {
        $(element).countdown('2015/10/10', function(event) {
            $(this).html(event.strftime('%m Months %d days %H:%M:%S'));
        });
    };

    return TimeCountDown;
}]);