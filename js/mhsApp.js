var app = angular.module("mhsApp", []);

app.directive("mhsheader", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/header.html"
    };
});

app.directive("mhsfooter", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/footer.html"
    };
});

app.directive("mhstopbar", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/topbar.html"
    };
});

app.directive("statusClass", [function () {
    return {
        restric: "A",
        scope: {
            x: "=",
        },
        link: function (scope, element, attrs, controller) {
            if (!scope.x.avatar) {
                //scope.x.avatar = "/data/avatar/default.jpg";
                scope.x.avatar = "https://api.adorable.io/avatars/48/" + (Math.floor((Math.random() * 100) + 1)) + ".png"
            }
            scope.$watch('x', function () {
                element.removeClass("avatar1");
                element.removeClass("avatar2")
                element.removeClass("avatar3");
                if (scope.x.status == '1') {
                    element.addClass('avatar1');
                } else if (scope.x.status == '2') {
                    element.addClass('avatar2');
                } else {
                    element.addClass('avatar3');
                }
            }, true);
        }
    }
}]);
app.directive("liSelected", [function () {
    return {
        restric: "A",
        scope: {
            x: "=",
        },
        link: function (scope, element, attrs, controller) {
            scope.$watch('x', function () {
                element.removeClass("list-item-select");
                if (scope.x.checked) {
                    element.addClass("list-item-select");
                }
            }, true);
        }
    }
}]);

