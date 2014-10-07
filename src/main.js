'use strict';

angular.module('app')

.controller("main", function ($scope, $element) {
  $element.find('noscript').remove();
  console.log('hi')
})

;
