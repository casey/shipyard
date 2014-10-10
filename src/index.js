'use strict';

angular.module('app', []).controller('main', function ($scope, $interval) {
  var excitement_level = 0;

  $interval(function () {
    excitement_level++;
    $scope.excitement = Array(excitement_level).join("!");
  }, 100);
})
