var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller("exampleCtrl", function ($scope, $http, $log) {

    $log.info("exampleCtrl");
    ctrl = this;

});