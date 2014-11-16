/**
* directive.diJustifiedGallery Module
*
* Description
*/
angular.module('directive.diJustifiedGallery', [])
.directive('diJustifiedGallery', [
function(
){
    var JustifiedGallery = {};

    JustifiedGallery.templateUrl = 'directives/diJustifiedGallery/diJustifiedGallery.tpl.html';

    JustifiedGallery.restrict = 'A';

    JustifiedGallery.scope = true;

    JustifiedGallery.replace = true;

    JustifiedGallery.link = function link(scope, element, attrs) {
        scope.images = [];
        for (var i = 1; i <= 5; i++) {
            scope.images.push(i + '.jpg');
        }
    };

    return JustifiedGallery;
}]);