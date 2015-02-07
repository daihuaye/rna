(function (){
    'use strict';

    angular
        .module('rna.couple', [])
        .controller('CoupleCtrl', CoupleCtrl);

    function CoupleCtrl($state) {
        var vm = this;
        vm.getWhichPage = getWhichPage;

        ///////////////

        function getWhichPage() {
            return $state.params.who;
        }
    }
})();