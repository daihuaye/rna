/**
* directive.diParallaxBackground Module
*
* Description
*/
angular.module('directive.diParallaxBackground', [])
.directive('diParallaxBackground', [
function(
){
    var ParallaxBackground = {};
    
    // ParallaxBackground.templateUrl = 'directives/diParallaxBackground/diParallaxBackground.tpl.html';

    ParallaxBackground.restrict = 'A';

    ParallaxBackground.scope = true;

    ParallaxBackground.replace = true;

    ParallaxBackground.link = function link(scope, element, attrs) {
        $(element).parallax("50%", 0.1);
    };

    return ParallaxBackground;
}]);