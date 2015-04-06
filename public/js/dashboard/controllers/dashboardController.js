
function DashboardController($scope, $modal) {
    $scope.games = [
    ];

    $scope.newGame = {};

    $scope.openCreateForm = function() {
        var modalInstance = $modal.open({
            templateUrl: '/js/dashboard/views/create-game.html',
            controller: function ($scope, $modalInstance) {
                $scope.onSubmit = function (form) {
                    $modalInstance.close();
                }
            },
            scope: $scope
        });

        modalInstance.result.then(function () {
            $scope.createGame();
        }, function () {});
    };



    $scope.createGame = function() {
        $scope.games.push({
            id: Math.floor(Math.random()*1001),
            teams: $scope.newGame,
            date: new Date()
        });
        $scope.newGame = {};
    };
}

app.controller('dashboardController', ['$scope', '$modal', DashboardController]);