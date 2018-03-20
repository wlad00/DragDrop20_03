
(function() {
    'use strict';

    // Based on myDraggable - https://docs.angularjs.org/guide/directive

    angular
        .module('app', ['gm.dragDrop'])
        .run(run);

    function run($rootScope, $filter) {


        $rootScope.mixedZone = {
            items: [
                { name: "An1lorem lorem lorem lorem loremAn1lorem lorem lorem lorem loremAn1lorem lorem lorem lorem lorem eee", number: 1},
                { name: "An2", number: 2 },
                { name: "An3", number: 3 },
                { name: "An4", number: 4 },
                { name: "An6", number: 6 },
                { name: "An5", number: 5 }

            ]
        };



        $rootScope.leftZone = {
            items: [

            ]
        };

        $rootScope.rightZone = {
            items: []
        };

        $rootScope.getDropHandler = function(category) {
            return function(dragOb) {
                if(category.items.indexOf(dragOb.item) < 0) {
                    dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
                    category.items.push(dragOb.item);
                    return true;  // Returning truthy value since we're modifying the view model
                }

            }
        }
    }

})();