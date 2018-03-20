
(function() {
    'use strict';

    // Based on myDraggable - https://docs.angularjs.org/guide/directive

    angular
        .module('app', ['gm.dragDrop'])
        .run(run);

    function run($rootScope, $filter) {
        /*$rootScope.categories = [
            {
                items: [ { name: "Item 1" } ]
            },
            {
                items: [  { name: "Item 2" }  ]
            },
            {
                items: [   { name: "Item 3" } ]
            }
        ];

        $rootScope.orderedItems = [
            {
                number: 1,
                order: 1,
                value: "One"
            },
            {
                number: 2,
                order: 2,
                value: "Two"
            },
            {
                number: 3,
                order: 3,
                value: "Three"
            }
        ];*/



        /*$rootScope.onHover = function(item) {

            return function(dragItem, mouseEvent) {

                console.log('onHover');

                if(item != dragItem)
                    dragItem.order =
                        item.order + ((mouseEvent.offsetY || -1) > 0 ? 0.5 : -0.5)
            }
        }*/

        /*$rootScope.reorder = function reorder() {

            console.log('reorder');

            var _orderedItems = $filter('orderBy')($rootScope.orderedItems, 'order');
            for(var i = 0; i < _orderedItems.length; i++) {
                _orderedItems[i].number = _orderedItems[i].order = i + 1;
            }
        }*/

        /*$rootScope.reset = function reset(droppedItem) {

            console.log('reset');

            droppedItem.order = droppedItem.number;
        }
*/
        $rootScope.leftZone = {
            items: []
        };

        $rootScope.rankArr = {
            items: [
                { id: 11, name: "An1", zone: "left" },
                { id: 12, name: "An2", zone: "right" },
                { id: 13, name: "An3", zone: "left" },
                { id: 14, name: "An4", zone: "right" },
                { id: 15, name: "An5", zone: "left" },
                { id: 16, name: "An6", zone: "right" }
            ]
        };




        $rootScope.rightZone = {
            items: []
        };

        $rootScope.getDropHandler = function(rankArr) {
            return function(dragOb) {

                if(rankArr.items.indexOf(dragOb.item) < 0) {

                    dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);

                    category.items.push(dragOb.item);

                    return true;  // Returning truthy value since we're modifying the view model
                }

            }
        }
    }

})();