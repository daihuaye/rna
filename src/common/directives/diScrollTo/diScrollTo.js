/**
* directive.diScrollTo Module
*
* Description
*/
angular.module('directive.diScrollTo', [])
.directive('diScrollTo', [
function(
){
    var ScrollTo = {};

    ScrollTo.templateUrl = 'directives/diScrollTo/diScrollTo.tpl.html';

    ScrollTo.restrict = 'A';

    ScrollTo.scope = true;

    ScrollTo.replace = true;

    ScrollTo.link = function link(scope, element, attrs) {};

    return ScrollTo;
}]);