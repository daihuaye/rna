/**
* directive.diHeader Module
*
* Description
*/
angular.module('directive.diHeader', [
    'pascalprecht.translate'
])
.directive('diHeader', function( $state, $translate ){
    var Header = {};

    Header.templateUrl = 'directives/diHeader/diHeader.tpl.html';

    Header.restrict = 'A';

    Header.scope = true;

    Header.link = function link(scope, element, attrs) {
        scope.isCoupleState = function() {
            return $state.current.name === 'couple';
        };

        scope.use = function(langulage) {
            $translate.use(langulage);
        };

        scope.isUseCN = function() {
            return $translate.use() === 'cn';
        };
    };

    return Header;
});