(function () {
    angular
        .module('directive.diAtom', [])
        .controller('diAtomController', diAtomController)
        .directive('diAtom', diAtom);

    function diAtomController($scope) {
        var vm = this;
        vm.onClick = onClick;

        function onClick() {
            $scope.video.isSelected = true;
        }
    }

    function diAtom() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/diAtom/diAtom.tpl.html',
            scope: {
                video: '='
            },
            controller: 'diAtomController',
            controllerAs: 'atom',
            link: link
        };

        //////////////

        function link(scope, element, attrs) {
            if (scope.video.thumbnail) {
                var url = "url(" + scope.video.thumbnail + ") center";
                element.find('.video').css('background', url);
            }
        }
    }
})();