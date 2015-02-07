/**
* directive.diJustifiedGallery Module
*
* Description
*/
angular.module('directive.diJustifiedGallery', [])
.controller('JustifiedGalleryCtrl', function($scope, JustifiedGalleryModel) {
    var vm = this;
    vm.images = [];

    for (var i = 1; i <= JustifiedGalleryModel.photoNum(); i++) {
        vm.images.push(i + '.jpg');
    }

    ////////////

})
.factory('JustifiedGalleryModel', function() {
    var numOfPhotos = 0;
    return {
        photoNum: photoNum
    };

    ///////////////

    function photoNum(options) {
        if (angular.isDefined(options)) {
            numOfPhotos = options;
        }
        return numOfPhotos;
    }
})
.directive('diJustifiedGallery', function($timeout){
    var JustifiedGallery = {};

    JustifiedGallery.controller = 'JustifiedGalleryCtrl';

    JustifiedGallery.controllerAs = 'vm';

    JustifiedGallery.templateUrl = 'directives/diJustifiedGallery/diJustifiedGallery.tpl.html';

    JustifiedGallery.restrict = 'A';

    JustifiedGallery.scope = true;

    JustifiedGallery.replace = true;

    JustifiedGallery.link = function link(scope, element, attrs) {
        $timeout(function() {
            $(element).waitForImages(loadGallery);
        });

        //////////

        function loadGallery() {
            $(element).justifiedGallery({
                lastRow : 'nojustify',
                rowHeight : 200,
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
        }
    };
    return JustifiedGallery;
});