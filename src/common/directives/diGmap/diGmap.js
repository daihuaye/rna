/**
* directive.diGmap Module
*
* Description
*/
angular.module('directive.diGmap', [])
.directive('diGmap', [
function(
){
    var Gmap = {};
    
    Gmap.restrict = 'A';

    Gmap.scope = true;

    Gmap.replace = true;

    Gmap.link = function link(scope, element, attrs) {
        var fenway = new google.maps.LatLng(37.405201, -122.149572);

        function openMarker(marker, event, context) {
            var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                }),
                data = "<h5>University Club of Palo Alto</h5>" +
                        "<p>3277 Miranda Ave Palo Alto, CA 94304</p>" +
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
        $(element).gmap3({
            marker: {
                values: [{latLng: [37.405678, -122.149539]}],
                events:{
                    click: openMarker,
                    mouseover: openMarker
                }
            },
            map:{
                options: {
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    streetViewControl: true,
                    center: fenway,
                    scrollwheel: false
                }
            },
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
        });
    };

    return Gmap;
}]);