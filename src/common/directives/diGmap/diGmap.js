/**
* directive.diGmap Module
*
* Description
*/
angular.module('directive.diGmap', [
    'service.Device'
])
.directive('diGmap', [
    'Device',
function(
    Device
){
    var Gmap = {};

    Gmap.restrict = 'A';

    Gmap.scope = true;

    Gmap.replace = true;

    Gmap.link = function link(scope, element, attrs) {
        var fenway = new google.maps.LatLng(37.405201, -122.149572),
            markerOption = {
                marker: {
                    values: [{latLng: [37.406109, -122.148778]}],
                    events:{
                        click: openMarker
                    }
                }
            },
            mapOption = {
                map:{
                    options: {
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        center: fenway,
                        scrollwheel: false
                    }
                }
            },
            gmap3Option = {};

        function getStreeViewOption() {
            return {
                streetviewpanorama: {
                    options: {
                        container: $(document.createElement("div")).addClass("googlemap col-md-6").attr('id', 'ra-streetview').insertAfter($(element)),
                        opts: {
                            position: fenway,
                            scrollwheel: false,
                            pov: {
                                heading: -20,
                                pitch: 5,
                                zoom: 1
                            }
                        }
                    }
                }
            };
        }

        function getInfowindowOption() {
            var data = "<h5>University Club of Palo Alto</h5>" +
                        "<p><a href='http://goo.gl/0oJqRs' target='_blank'>3277 Miranda Ave Palo Alto, CA 94304</a></p>" +
                        "<p><a href='tel:+1-650-493-3972'>(650) 493-3972</a></p>";

            return {
                infowindow: {
                    values: [{latLng: [37.406450, -122.148778]}],
                    options: {
                        content: data
                    }
                }
            };

        }

        function openMarker(marker, event, context) {
            var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                });
            if (infowindow) {
                infowindow.open(map, marker);
            }
        }

        angular.extend(gmap3Option, markerOption, mapOption, getInfowindowOption(), {});
        $(element).gmap3(gmap3Option);
    };

    return Gmap;
}]);