(function (module) {
    'use strict';

    module.controller('WishlistCtrl', wishlistCtrl);

    function wishlistCtrl () {
    }
})(angular.module('rna.wishlist', [
    'angular.parallaxScroll',
    'rna.wishlist.wish'
]));