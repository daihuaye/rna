/**
* directive.diIsotopeGrid Module
*
* Description
*/
angular.module('directive.diIsotopeGrid', [])
.directive('diIsotopeGrid', [
function(
){
    var IsotopeGrid = {};

    IsotopeGrid.templateUrl = 'directives/diIsotopeGrid/diIsotopeGrid.tpl.html';

    IsotopeGrid.restrict = 'A';

    IsotopeGrid.scope = true;

    IsotopeGrid.replace = true;

    IsotopeGrid.link = function link(scope, element, attrs) {
        $(element).isotope({
            itemSelector: '.ra-type-event'
        });
    };

    return IsotopeGrid;
}]);