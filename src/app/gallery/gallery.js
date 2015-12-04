(function (){
    'use strict';

    angular
        .module('rna.gallery', [
            'directive.moments',
            'infinite-scroll'
        ])
        .controller('GalleryCtrl', GalleryCtrl)
        .factory('WeddingPhotos', WeddingPhotos);

    function GalleryCtrl($state, photoNames, WeddingPhotos, $scope, $document) {
        var vm = this;
        var imageIndex = 0;
        var names = _.map(photoNames.data, function(name) {
            return "assets/images/wedding-photos/" + name;
        });
        vm.wedding = new WeddingPhotos(names);
        vm.next = function() {
            var photos = vm.wedding.Next();
            $scope.$broadcast('NextImages', photos);
        };

        $document.bind('cbox_complete', function(e) {
            var el = $.colorbox.element();
            imageIndex = el.data('index');
        });

        $scope.$on('cbox_next', function() {
            var max = $('.ra-justified-gallery').find('img').length;
            if (imageIndex + 1 > max) {
                vm.next();
            }
        });
    }

    function WeddingPhotos() {
        var delta = 1;
        var Photos = function (items) {
            this.items = items;
            this.nextNum = 11;
            this.photos = items.slice(0, 10);
        };

        Photos.prototype.Next = function() {
            var nextN = this.nextNum + delta;
            var nextPhotos = this.items.slice(this.nextNum, (nextN > this.items.length) ? this.items.length : nextN);
            this.nextNum = nextN;
            this.photos = _.union(this.photos, nextPhotos);
            return nextPhotos;
        };

        return Photos;
    }
})();