(function() {
    'use strict';

    angular
        .module('rna.filters.reverse', [])
        .filter('reverse', reverse);

    function reverse() {
        return function(items) {
            return _.toArray(items).reverse();
        };
    }
})();