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
            // return "http://res.cloudinary.com/daihuay/image/upload/c_scale,w_750/v1450661958/wedding/" + name;
            return "http://rna.com.s3.amazonaws.com/wedding/" + name;
        });
        vm.wedding = new WeddingPhotos(names);
        vm.isBusy = false;
        vm.next = function next() {
            var photos = vm.wedding.Next();
            if (photos.length > 0) {
                vm.isBusy = true;
                $scope.$broadcast('NextImages', photos);
            }
        };

        $document.bind('cbox_complete', function(e) {
            var el = $.colorbox.element();
            imageIndex = el.data('index');
            nextImage();
        });

        $scope.$on('cbox_next', function(event, data) {
            nextImage();
        });

        $scope.$on('moment_images_loaded', function() {
            vm.isBusy = false;
        });

        function nextImage() {
            var max = $('.ra-gallery').find('img').length;
            if(imageIndex + 5 >= max) {
                vm.next();
            }
        }
    }

    function WeddingPhotos() {
        var delta = 10;
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