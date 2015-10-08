angular.module('rna.timeline', [
])
.controller('TimelineCtrl', TimelineCtrl);

function TimelineCtrl($scope) {
    var vm = this;
    vm.titleStyle = {
        'height': '250px'
    };
}