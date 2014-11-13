/**
* directive.diHeader Module
*
* Description
*/
angular.module('directive.diHeader', [])
.directive('diHeader', [
function(
){
    var Header = {};
    
    Header.templateUrl = 'directives/diHeader/diHeader.tpl.html';

    Header.restrict = 'A';

    Header.scope = true;

    Header.link = function link(scope, element, attrs) {};

    return Header;
}]);