(function() {
    'use strict';

    angular
        .module('rna.gallery.model', [])
        .factory('GalleryModel', GalleryModel);

    function GalleryModel() {
        return {
            getGalleryNum: getGalleryNum
        };

        ////////////////

        function getGalleryNum() {
            return 5;
        }
    }

})();