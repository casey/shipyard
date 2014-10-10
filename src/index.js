'use strict';

angular.module('app')

.constant('CT', CT)

.controller("main", function ($scope, $element, CT) {
  $scope.images = [];

  var ct = CT($element);

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
    var w = 0;
    var h = 0;

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      w += image.naturalWidth;
      var h = Math.max(h, image.naturalHeight);
    }
    
    console.log(w, h);
    ct.width(w).height(h);

    $scope.height = '' + 100 * (h / w) + '%';

    console.log($scope.height);
    
    ct.fillStyle("#000000").fillRect(0, 0, w, h);

    var x = 0;
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var y = h / 2 - image.naturalHeight / 2;
      ct.drawImage(image, x, y);
      x += image.naturalWidth;
    }
  }); 
})

;
