(function (){
    'use strict';

    angular
        .module('rna.gallery', [
            'directive.diJustifiedGallery'
        ])
        .controller('GalleryCtrl', GalleryCtrl);

    function GalleryCtrl($state, JustifiedGalleryModel) {
        var vm = this;
        JustifiedGalleryModel.photoNum(5);

        ///////////////
    }
})();