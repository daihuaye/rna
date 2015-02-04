/**
* directive.diJustifiedGallery Module
*
* Description
*/
angular.module('directive.diJustifiedGallery', [])
.controller('JustifiedGalleryCtrl', ['$scope', function($scope) {
    var vm = this;
    vm.images = [];

    for (var i = 1; i <= 5; i++) {
        vm.images.push(i + '.jpg');
    }
}])
.directive('diJustifiedGallery', [
function(
){
    var JustifiedGallery = {};

    JustifiedGallery.controller = 'JustifiedGalleryCtrl';

    JustifiedGallery.controllerAs = 'vm';

    JustifiedGallery.templateUrl = 'directives/diJustifiedGallery/diJustifiedGallery.tpl.html';

    JustifiedGallery.restrict = 'A';

    JustifiedGallery.scope = true;

    JustifiedGallery.replace = true;

    JustifiedGallery.link = function link(scope, element, attrs) {
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