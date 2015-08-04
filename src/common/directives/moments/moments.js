/**
* directive.moments Module
*
* Description
*/
angular.module('directive.moments', [])
.controller('MomentsCtrl', function($scope, MomentsModel) {
    var vm = this;
    vm.images = [];

    for (var i = 1; i <= MomentsModel.photoNum(); i++) {
        vm.images.push(i + '.JPG');
    }

    ////////////

})
.factory('MomentsModel', function() {
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
.directive('moments', function($timeout){
    return {
        controller: 'MomentsCtrl',
        controllerAs: 'vm',
        templateUrl: 'directives/moments/moments.tpl.html',
        restrict: 'AE',
        scope: true,
        replace: true,
        link: link
    };

    //////////

    function link(scope, element, attrs) {
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
    }
});