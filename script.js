
(function() {
    'use strict';

    // Based on myDraggable - https://docs.angularjs.org/guide/directive

    angular
        .module('app', ['gm.dragDrop'])
        .run(run);

    function run($rootScope, $filter) {


        $rootScope.rowsPlace = [];
        $rootScope.rowsPlace.push(    [
                { name: "An1lorem lorem lorem lorem loremAn1lorem lorem lorem lorem loremAn1lorem lorem lorem lorem lorem eee", number: 1},
                { name: "An2", number: 2 },
                { name: "An3", number: 3 },
                { name: "An4", number: 4 },
                { name: "An6", number: 6 },
                { name: "An5", number: 5 }
            ]);



        $rootScope.firstZone = [];
        $rootScope.firstZone.push( []);

        $rootScope.secondZone = [];
        $rootScope.secondZone.push( []);

        $rootScope.thirdZone =  [];
        $rootScope.thirdZone.push( []);

        $rootScope.moveRowTo = function(isSingle,putPlace) {
            return function(dragOb) {

                if( isSingle && putPlace.length > 0) return;

                if(putPlace.indexOf(dragOb.item) < 0  ) {

                    dragOb.dragPlace.splice
                    (dragOb.dragPlace.indexOf(dragOb.item), 1);

                    putPlace.push(dragOb.item);

                    return true;  // Returning truthy value since we're modifying the view model
                }
            };
        }
    }

})();