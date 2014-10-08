'use strict';

angular.module('app')

.controller("main", function ($scope, $element, CT) {
  $scope.images = [];

  var ct = CT($element);

  ct.fillStyle("#ffffaa").fillRect(0, 0, 500, 300);

  $element.bind('dragover', function (e) {
    e.preventDefault();
  });

  $element.bind('dragenter', function (e) {
    e.preventDefault();
  });

  $element.bind('drop', function (e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      var img = document.createElement("img");
      img.src = URL.createObjectURL(files[i]);
      img.onload = function () {
        $scope.images.push(this);
        $scope.$digest();
      }
    }
  });

  $scope.$watchCollection('images', function (images) {
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      console.log(image);
      ct.drawImage(image, 0, 0);
    }
  }); 

})

;
