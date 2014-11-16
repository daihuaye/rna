/**
* directive.diHeroParties Module
*
* Description
*/
angular.module('directive.diHeroParties', [])
.directive('diHeroParties', [
function(
){
    var HeroParties = {};
    
    HeroParties.templateUrl = 'directives/diHeroParties/diHeroParties.tpl.html';

    HeroParties.restrict = 'A';

    HeroParties.replace = true;

    HeroParties.scope = true;

    HeroParties.link = function link(scope, element, attrs) {};

    return HeroParties;
}]);