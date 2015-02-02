/**
* directive.diRsvpForm Module
*
* Description
*/
angular
.module('directive.diRsvpForm', [
    'rna.home.model'
])
.controller('RsvpCtrl', [
    'HomeModel',
function (HomeModel) {
    var vm = this;
    vm.submitRsvp = submitRsvp;

    vm.rsvp = {
        firstName: 'Chao',
        lastName: 'Jin',
        email: 'chaojin@gmail.com',
        numberOfadults: 2,
        numberOfChild: 3
    };

    function submitRsvp() {
        console.log(vm.rsvp);
        HomeModel
        .rsvp(vm.rsvp)
        .then(function(data) {
        }, function(data) {
        });
    }
}])
.directive('diRsvpForm', [
function(
){
    var RsvpForm = {};

    RsvpForm.templateUrl = 'directives/diRsvpForm/diRsvpForm.tpl.html';

    RsvpForm.restrict = 'A';

    RsvpForm.controller = 'RsvpCtrl';

    RsvpForm.controllerAs = 'vm';

    RsvpForm.scope = true;

    RsvpForm.replace = true;

    RsvpForm.link = function link(scope, element, attrs) {};

    return RsvpForm;
}]);