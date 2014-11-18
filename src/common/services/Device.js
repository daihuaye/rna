/**
* service.Device Module
*
* Description
*/
angular.module('service.Device', [])
.factory('Device', [function () {
    var Device = {};

    Device.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    Device.browserWidth = $(window).width();

    return Device;
}]);