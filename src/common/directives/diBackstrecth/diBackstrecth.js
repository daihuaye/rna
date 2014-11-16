/**
* directive.diBackstrecth Module
*
* Description
*/
angular.module('directive.diBackstrecth', [])
.directive('diBackstrecth', [
function(
){
    var Backstrecth = {};

    Backstrecth.restrict = 'A';

    Backstrecth.scope = true;

    Backstrecth.replace = true;

    Backstrecth.link = function link(scope, element, attrs) {
        $(element).backstretch([
            'https://s3.amazonaws.com/rna.com/hero1.jpg',
            'https://s3.amazonaws.com/rna.com/hero2.jpg',
            'https://s3.amazonaws.com/rna.com/hero3.jpg'
        ], {duration: 3000, fade: 750});
    };

    return Backstrecth;
}]);