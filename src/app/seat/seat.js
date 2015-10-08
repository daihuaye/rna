(function (module) {
    'use strict';

    module.controller('SeatCtrl', SeatCtrl);

    function SeatCtrl(seatdata, $scope) {
        var vm = this;
        vm.seatdata = seatdata.data;
        vm.guest = {};
        vm.isFindGuest = isFindGuest;
        vm.onSelect = onSelect;

        function isFindGuest() {
            return angular.isDefined(vm.guest) && vm.guest.fullName;
        }

        function onSelect(target) {
            vm.guest = _.find(vm.seatdata, function(item) {
                return item.fullName === target.item.text();
            });
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }
    }
})(angular.module('rna.seat', [
    'kendo.directives'
]));