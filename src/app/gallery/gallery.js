(function (){
    'use strict';

    angular
        .module('rna.gallery', [
            'directive.moments'
        ])
        .controller('GalleryCtrl', GalleryCtrl);

    function GalleryCtrl($state, MomentsModel) {
        var vm = this;
        MomentsModel.photoNum(5);

        ///////////////
    }
})();