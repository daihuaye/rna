/**
* directive.wish Module
*
* Description
*/
angular.module('rna.wishlist.wish', [])
.directive('wish', [
function(
){
    return {
        templateUrl: 'wishlist/wish/wish.tpl.html',
        restrict: 'AE',
        scope: true,
        replace: true,
        link: link
    };

    //////////////

    function link(scope, element, attrs) {
    }

}]);