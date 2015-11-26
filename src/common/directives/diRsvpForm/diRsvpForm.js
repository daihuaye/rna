/**
* directive.diRsvpForm Module
*
* Description
*/
angular
.module('directive.diRsvpForm', [
    'rna.home.model',
    'ngMessages',
    'pascalprecht.translate'
])
.controller('RsvpCtrl', function(HomeModel, $scope, $analytics) {
    var vm = this;
    var deadline = (new Date('2015/10/10')).getTime();
    vm.submitRsvp = submitRsvp;
    vm.interacted = interacted;
    vm.submitted = false;

    vm.rsvp = {
        firstName: '',
        lastName: '',
        email: '',
        numberOfadults: 1,
        numberOfChild: 0,
        allergy: '',
        password: generatePassword()
    };

    function submitRsvp(field) {
        vm.submitted = true;
        var currentTime = (new Date()).getTime();
        if (Object.keys(field.$error).length === 0 && currentTime < deadline) {
            HomeModel
                .rsvp(vm.rsvp)
                .then(function(data) {
                    $analytics.eventTrack('rsvp.submit', { category: 'rsvp.success', label: 'success'});
                    $scope.$emit('rsvp.submitSuccess', data);
                }, function(data) {
                    $analytics.eventTrack('rsvp.submit', { category: 'rsvp.failure', label: data});
                    $scope.$emit('rsvp.submitFailure', data);
                });
        }
    }

    function generatePassword(length) {
        var chars = 'abcdefghklmnpqrstuvwxyz23456789';
        return _.times(length || 8, function() {
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
    }

    function interacted (field) {
        return vm.submitted || field.$dirty;
    }
})
.directive('diRsvpForm', [
    function() {
        return {
            templateUrl: 'directives/diRsvpForm/diRsvpForm.tpl.html',
            restrict: 'AE',
            controller: 'RsvpCtrl',
            controllerAs: 'vm',
            scope: true,
            replace: true,
            link: link
        };

        function link(scope, element, attrs) {
        }
    }
]);
