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

        $(window).load(function() {
            $(element).justifiedGallery({
                lastRow : 'nojustify', 
                rowHeight : 100, 
                rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
                margins : 1
            }).on('jg.complete', function () {
                $(this).find('a').colorbox({
                    maxWidth : '100%',
                    maxHeight : '100%',
                    opacity : 0.8,
                    transition : 'elastic',
                    current : ''
                });
            });
        });
    };
    return JustifiedGallery;
}]);