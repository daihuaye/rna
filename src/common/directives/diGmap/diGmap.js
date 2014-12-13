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
                    values: [{latLng: [37.405678, -122.149539]}],
                    events:{
                        click: openMarker,
                        mouseover: openMarker
                    }
                }
            },
            mapOption = {
                map:{
                    options: {
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        streetViewControl: !Device.device,
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

        function openMarker(marker, event, context) {
            var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                }),
                data = "<h5>University Club of Palo Alto</h5>" +
                        "<p><a href='http://goo.gl/0oJqRs' target='_blank'>3277 Miranda Ave Palo Alto, CA 94304</a></p>" +
                        "<p>(650) 493-3972</p>";
            if (infowindow) {
                infowindow.open(map, marker);
            } else {
                $(this).gmap3({
                    infowindow: {
                        anchor: marker,
                        options: {
                            content: data
                        }
                    }
                });
            }
        }

        angular.extend(gmap3Option, markerOption, mapOption, (!Device.device ? getStreeViewOption() : {}));
        $(element).gmap3(gmap3Option);
    };

    return Gmap;
}]);