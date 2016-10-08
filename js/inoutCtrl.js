



app.controller("inoutCtrl", function ($scope, $http) {
    $scope.data = [];
    $http({
        method: "GET",
        url: "/data/inoutdata.json"
    }).then(function successCallBack(response) {
        $scope.data = response.data;
        console.log(response);
        console.log($scope.data);
    }, function errorCallBack(response) {
        console.log(respose);
        $scope.data = [{ name: "404 Not Found" }];
    });
    $scope.user = {};
    $scope.reset = function () {
        $scope.user = {};
    };
    $scope.newUser = function (user) {
        $scope.user = angular.copy(user);
        console.log("Preparing to add newUser: " + $scope.user);
    };
});