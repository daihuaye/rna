/**
* directive.diScrollTo Module
*
* Description
*/
angular.module('directive.diScrollTo', [
    'ngTouch'
])
.directive('diScrollTo', [
function(
){
    var ScrollTo = {};

    ScrollTo.templateUrl = 'directives/diScrollTo/diScrollTo.tpl.html';

    ScrollTo.restrict = 'A';

    ScrollTo.scope = true;

    ScrollTo.replace = true;

    ScrollTo.link = function link(scope, element, attrs) {
        scope.scrollTo = function (id) {
            var $ele = $(id);
            $ele.velocity("scroll", { duration: 500, easing: "linear" });
        };
    };

    return ScrollTo;
}]);