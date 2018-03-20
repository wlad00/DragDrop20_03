
(function() {
    'use strict';

    // Based on myDraggable - https://docs.angularjs.org/guide/directive

    angular
        .module('app', ['gm.dragDrop'])
        .run(run);

    function run($rootScope, $filter) {


        $rootScope.rowsPlace = {
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
            items: []
        };

        $rootScope.rightZone = {
            items: []
        };

        $rootScope.getDropHandler = function(dragPlace) {
            return function(dragOb) {

                if(dragPlace.items.indexOf(dragOb.item) < 0) {

                    dragOb.dropPlace.items.splice
                    (dragOb.dropPlace.items.indexOf(dragOb.item), 1);

                    dragPlace.items.push(dragOb.item);

                    return true;  // Returning truthy value since we're modifying the view model
                }
            }
        }
    }

})();