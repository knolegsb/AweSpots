var AweSpotApp = angular.module("AweSpotApp", ["ngRoute", "ui.bootstrap", "ngCookies", "ngSanitize"]);

var config = function ($routeProvider, $locationProvider, $sceProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/Views/Home/AweSpot.html",
        controller: "AweSpotController"
    })
    .when("/login", {
        tempaleUrl: "/Views/Account/Login.html",
        controller: "LoginController"
    })
    .when("/register", {
        templateUrl: "/Views/Account/Register.html",
        controller: "RegisterController"
    })
    .when("/users", {
        templateUrl: "/Views/Admin/Users.html",
        controller: "UsersController"
    });
};
