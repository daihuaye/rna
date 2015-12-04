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
.directive('moments', function($document){
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
        var busy = false;
        var cbox_open = false;
        var index = 0;
        function initWithMasonry() {
            $grid = $(element).masonry({
                itemSelector: '.grid-item'
            });
            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
            $grid.one( 'layoutComplete', function() {
                initColorbox($(this).find('img'));
            });
        }

        function initColorbox($img, opt) {
            var options = {
                maxWidth : '100%',
                maxHeight : '100%',
                opacity : 0.8,
                transition : 'elastic',
                current : '',
                rel: 'grid-item'
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
                    .addClass('grid-item')[0];
            });
            element.append(listItems);
            return listItems.length === 1 ? listItems[0] :listItems;
        }

        scope.$on('NextImages', function(event, data) {
            if (!busy) {
                busy = true;
                var item = addImagesToMasonry(data);
                $grid.masonry('appended', item);
                initColorbox($(item));
                $(item).imagesLoaded().progress(function () {
                    $grid.masonry('layout');
                    busy = false;
                    if (cbox_open) {
                        $.colorbox.next();
                    }
                });
            }
        });

        $document.on('mousedown', 'button#cboxNext', function(event) {
            scope.$emit('cbox_next');
        });

        $document.bind('cbox_open', function() {
            cbox_open = true;
        });

        $document.bind('cbox_closed', function() {
            cbox_open = false;
        });

        $document.bind('keydown.moments', function(e) {
            var key = e.keyCode;
            if(cbox_open && key === 39 && !e.altKey) {
                scope.$emit('cbox_next');
            }
        });

        addImagesToMasonry(scope.photos);
        initWithMasonry();
    }
});