/*
    component: example
    bindings : exampleSource
               onInit
               onChange
               onDestroy
*/
function ExampleCompController() {

    var ctrl = this;
    ctrl.$onInit = function () {
        console.log("$onInit" + ctrl.exampleSource);
        /* Any initialization code for the component */
        /* 필요한 jQuery와 같은 함수 추가 */
    };

    /* $onChanges is only called when the "reference" of one-way binding is changed */
    ctrl.$onChanges = function (changesObj) {
        console.log("$onChanges");
        /* your code */
    };

    ctrl.$onDestroy = function () {
        console.log("$onDestroy");
        /* your code */
    };

    /* All DOM is loaded */
    angular.element(document).ready(function () {

    });
}

/* 컴포넌트 선언 */
angular.module('exampleApp').component('numberAlarm', {
    templateUrl: 'components/numberAlarm.html',
    controller: ExampleCompController,
    bindings: {
        exampleSource: '<'
    }
});

