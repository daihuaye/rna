/**
* directive.diHeader Module
*
* Description
*/
angular.module('directive.diHeader', [
    'pascalprecht.translate'
])
.factory('headerModal', function($localStorage) {
    return {
        langulage: getLanguage()
    };

    /////////

    function getLanguage() {
        if ($localStorage.use) {
            return $localStorage.use;
        }
        return 'en';
    }
})
.directive('diHeader', function( $state, $translate, headerModal, $localStorage ){
    var Header = {};

    Header.templateUrl = 'directives/diHeader/diHeader.tpl.html';

    Header.restrict = 'A';

    Header.scope = true;

    Header.link = function link(scope, element, attrs) {
        $translate.use(headerModal.langulage);

        scope.isCoupleState = function() {
            return $state.current.name === 'couple';
        };

        scope.use = function(langulage) {
            $localStorage.use = langulage;
            $translate.use(langulage);
        };

        scope.isUseCN = function() {
            return $translate.use() === 'cn';
        };

        scope.$on('$stateChangeSuccess', function() {
            $('#navbar-collapse-header').collapse('hide');
        });
    };

    return Header;
});