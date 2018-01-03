/* AngularJS App */
var myApp = angular.module("exampleApp", ["exampleApp.Controllers"]);
angular.element(function () {
    angular.bootstrap(document, ['exampleApp']);
});