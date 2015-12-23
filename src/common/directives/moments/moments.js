/**
* directive.moments Module
*
* Description
*/
angular.module('directive.moments', [])
.controller('MomentsCtrl', function($scope) {
    var vm = this;

    ////////////
})
.directive('moments', function($document, $timeout){
    return {
        controller: 'MomentsCtrl',
        controllerAs: 'vm',
        templateUrl: 'directives/moments/moments.tpl.html',
        restrict: 'AE',
        scope: {
            photos: "=?"
        },
        replace: true,
        link: link
    };

    //////////

    function link(scope, element, attrs, controller) {
        var $grid;
        scope.busy = true;
        var cbox_open = false;
        var index = 0;
        function initWithMasonry() {
            $grid = $(element).masonry({
                itemSelector: '.grid-item'
            });
            $grid.imagesLoaded().done(function () {
                $timeout(function() {
                    $grid.masonry('layout');
                });
                scope.busy = false;
                scope.$emit('moment_images_loaded');
                apply();
            });
            $grid.one( 'layoutComplete', function() {
                initColorbox($(this).find('img'));
            });
        }

        function initColorbox($img, opt, callback) {
            var options = {
                maxWidth : '100%',
                maxHeight : '100%',
                opacity : 0.8,
                transition : 'elastic',
                current : '',
                rel: 'grid-item',
                onComplete: callback
            };
            if (opt) {
                angular.extend(options, opt);
            }
            $img.colorbox(options);
        }

        function addImagesToMasonry(photos) {
            var listItems = _.map(photos, function(photoUrl) {
                index = index + 1;
                return $('<img>')
                    .prop('src', photoUrl)
                    .attr('href', photoUrl)
                    .data('index', index)
                    .addClass('image-loading')
                    .addClass('grid-item')[0];
            });
            element.append(listItems);
            return listItems.length === 1 ? listItems[0] :listItems;
        }

        scope.$on('NextImages', function(event, data) {
            if (!scope.busy) {
                scope.busy = true;
                var item = addImagesToMasonry(data);
                $grid.masonry('appended', item);
                initColorbox($(item));
                $(item).imagesLoaded().done(function () {
                    $timeout(function() {
                        $grid.masonry('layout');
                    });
                    scope.busy = false;
                    apply();
                    scope.$emit('moment_images_loaded');

                });
            }
        });

        function apply() {
            if (!scope.$$phase) {
                scope.$apply();
            }
        }

        $document.on('mousedown', 'button#cboxNext', function(e) {
            scope.$emit('cbox_next', e);
        });

        $document.bind('cbox_open', function() {
            cbox_open = true;
        });

        $document.bind('cbox_closed', function() {
            cbox_open = false;
        });

        scope.$watch('busy', function() {
            if (!scope.busy) {
                $('.image-loading').removeClass('image-loading');
            }
        });

        $('body').bind('keydown.cbox', function(e) {
            var key = e.keyCode;
            if(cbox_open && key === 39 && !e.altKey) {
                scope.$emit('cbox_next', e);
            }
        });

        addImagesToMasonry(scope.photos);
        initWithMasonry();
    }
});