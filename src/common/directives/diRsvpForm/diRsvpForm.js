/**
* directive.diRsvpForm Module
*
* Description
*/
angular
.module('directive.diRsvpForm', [
    'rna.home.model',
    'pascalprecht.translate'
])
.controller('RsvpCtrl', function (HomeModel) {
    var vm = this;
    vm.submitRsvp = submitRsvp;

    vm.rsvp = {
        firstName: '',
        lastName: '',
        email: '',
        numberOfadults: 0,
        numberOfChild: 0
    };

    function submitRsvp() {
        HomeModel
        .rsvp(vm.rsvp)
        .then(function(data) {
        }, function(data) {
        });
    }
})
.directive('diRsvpForm', [
function(
){
    return {
        templateUrl: 'directives/diRsvpForm/diRsvpForm.tpl.html',
        restrict: 'AE',
        controller: 'RsvpCtrl',
        controllerAs: 'vm',
        scope: true,
        replace; true,
        link: link
    };

    function link(scope, element, attrs) {
    }
}]);