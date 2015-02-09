(function () {
    angular
        .module('directive.diFooter', [])
        .directive('diFooter', diFooter);

    function diFooter() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/diFooter/diFooter.tpl.html',
            link: link
        };

        //////////////

        function link(scope, element, attrs) {

        }
    }
})();