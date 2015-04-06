

function route($routeProvider, $locationProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: '/js/dashboard/views/dashboard.html',
            controller: 'dashboardController',
        })
        .otherwise({
            redirectTo: '/dashboard'
        });

//    $locationProvider.html5Mode(true);
}

app.config(['$routeProvider', '$locationProvider', route]);

