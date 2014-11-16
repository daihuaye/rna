/**
* directive.diRsvpForm Module
*
* Description
*/
angular.module('directive.diRsvpForm', [])
.directive('diRsvpForm', [
function(
){
    var RsvpForm = {};

    RsvpForm.templateUrl = 'directives/diRsvpForm/diRsvpForm.tpl.html';

    RsvpForm.restrict = 'A';

    RsvpForm.scope = true;

    RsvpForm.replace = true;

    RsvpForm.link = function link(scope, element, attrs) {};

    return RsvpForm;
}]);