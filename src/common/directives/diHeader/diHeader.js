/**
* directive.diHeader Module
*
* Description
*/
angular.module('directive.diHeader', [])
.directive('diHeader', [
    '$state',
function(
    $state
){
    var Header = {};
    
    Header.templateUrl = 'directives/diHeader/diHeader.tpl.html';

    Header.restrict = 'A';

    Header.scope = true;

    Header.link = function link(scope, element, attrs) {
        scope.isCoupleState = function() {
            return $state.current.name === 'couple';
        };
    };

    return Header;
}]);