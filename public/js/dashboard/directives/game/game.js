
function GameController($scope) {

    $scope.outcome = function() {
        var status = 'vs';
        var current = (Math.floor(Math.random()*11) % 2) == 0;
//        if(!current) {
//            var won = (Math.floor(Math.random()*11) % 2) == 0;
//            status = won ? 'bt' : 'lost to';
//        }
        return status;
    };
}

function Game() {
    return {
        scope: {
            data: '='
        },
        restrict: 'E',
        controller: 'gameController',
        templateUrl: '/js/dashboard/directives/game/game.html',
        link: function(scope, element, attr) {

        }
    }
}

app.directive('game', [Game]);
app.controller('gameController', ['$scope', GameController]);