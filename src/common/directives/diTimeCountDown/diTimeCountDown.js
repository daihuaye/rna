/**
* direcitve.diTimeCountDown Module
*
* Description
*/
angular.module('direcitve.diTimeCountDown', [])
.controller('TimeCountDownCtrl', [
    '$scope',
function (
    $scope
){

}])
.directive('diTimeCountDown', [
function(
){
    var TimeCountDown = {};

    TimeCountDown.controller = 'TimeCountDownCtrl';

    TimeCountDown.templateUrl = 'directives/diTimeCountDown/diTimeCountDown.tpl.html';

    TimeCountDown.restrict = 'A';

    TimeCountDown.replace = true;

    TimeCountDown.scope = true;

    TimeCountDown.link = function link(scope, element, attrs) {
        var labels = ['MONTHS', 'DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
        nextYear = '2015/10/10',
        template = _.template($(element).find('#countdown-template').html()),
        currDate = '00:00:00:00:00',
        nextDate = '00:00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $(element);
        // Parse countdown string to an object
        function strfobj(str) {
            var parsed = str.match(parser),
                obj = {};
            labels.forEach(function(label, i) {
                obj[label] = parsed[i];
            });
            return obj;
        }
        // Return the time components that diffs
        function diff(obj1, obj2) {
            var diffAry = [];
            labels.forEach(function(key) {
                if (obj1[key] !== obj2[key]) {
                    diffAry.push(key);
                }
            });
            return diffAry;
        }
        // Build the layout
        var initData = strfobj(currDate);
        labels.forEach(function(label, i) {
            $example.append(template({
                curr: initData[label],
                next: initData[label],
                label: label
            }));
        });
        // Starts the countdown
        $example.countdown(nextYear, function(event) {
            var newDate = event.strftime('%m:%d:%H:%M:%S'),
                data;
            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                // Setup the data
                data = {
                    'curr': strfobj(currDate),
                    'next': strfobj(nextDate)
                };
                // Apply the new values to each node that changed
                diff(data.curr, data.next).forEach(function(label) {
                    var selector = '.%s'.replace(/%s/, label),
                        $node = $example.find(selector);
                    // Update the node
                    $node.removeClass('flip');
                    $node.find('.curr').text(data.curr[label]);
                    $node.find('.next').text(data.next[label]);
                    // Wait for a repaint to then flip
                    _.delay(function($node) {
                        $node.addClass('flip');
                    }, 5, $node);
                });
            }
        });
    };

    return TimeCountDown;
}]);