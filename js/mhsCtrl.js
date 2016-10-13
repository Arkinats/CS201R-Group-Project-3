

app.controller("applyCtrl", function($scope, $location, $http) {
    $scope.personalInfo = {last: "", first: "", mi: "", street: "", city: "", state: "", zip: "", email: "", tele: ""};
    $scope.employInfo = {position: "", start: "", salary: "", how: ""};
    $scope.education = [];  // {School: __, Cert: __, Date: __}
    $scope.employment = []; // {employer: __, telephone: __, address: __, title: __, supervisor: __, salary: __, start: __, end: __, reason: __, work: __}
    $scope.otherInfo = "";
    $scope.references = []; // {name, address, telephone, email, occupation}
    $scope.myObj = {
        "height": "100px",
        "background": "url(/css/header.png) repeat-x",
        "width": "100%",
        "padding": "50px"
    };
});

app.controller("inoutCtrl", function ($scope, $http) {
    $scope.data = [];
    $http({
        method: "GET",
        url: "data/inoutdata.json"
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