



app.controller("inoutCtrl", function ($scope, $http) {
    $scope.data = [];
        /* {
         *  "avatar": "url.jpg",
         *  "email": "",
         *  "message": availablity status message,
         *  "name": person's name,
         *  "position": job title,
         *  "status": 1 2 3 - available, busy, not available
         *  "telephone": telephone number
         *  "checked: boolean
         *  } */

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
    $scope.user = {name: "", position: "", email: "", telephone: "", avatar: ""};
    $scope.reset = function (newUser) {
        console.log("reset()");
        $scope.user = { name: "", position: "", email: "", telephone: "", avatar: "" };
    };
    $scope.addUser = function () {
        console.log();
        //$scope.user = angular.copy(newUser);
        $scope.user.message = "Available";
        $scope.user.checked = false;
        $scope.user.status = 1;
        console.log("Preparing to add newUser: " + $scope.user);
        $scope.data.push($scope.user);
        $scope.reset();
    };
    $scope.setStatus = function (set) {
        console.log("setStatus() called with: " + set);
        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.data[i].checked) {
                $scope.data[i].status = set.status;
                $scope.data[i].message = set.message;
            }
        }
    };
    $scope.listSort = "name";
    $scope.listSorter = function () {
        switch ($scope.listSort) {
            case "name":
                $scope.listSort = "position";
                break;
            case "position":
                $scope.listSort = ["status", "name"];
                break;
            default:
                $scope.listSort = "name";
        }
    };
    $scope.checkToggle = function (x) {
        console.log("CheckToggle(" + x.checked + ")");
        if (x.checked) {
            x.checked = false;
        } else {
            x.checked = true;
        }
    };
    $scope.showInfo = false;
    $scope.toggleInfo = function () {
        if ($scope.showInfo) {
            $scope.showInfo = false;
        } else {
            $scope.showInfo = true;
        }
    }
});