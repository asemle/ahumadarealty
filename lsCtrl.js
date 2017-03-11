angular.module("app")
.controller("lsCtrl", function($scope) {

  $scope.initMap = function () {

      var terraMar = {
          lat: 26.217876,
          lng: -80.096198
      };

      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: terraMar,
      });
      var marker = new google.maps.Marker({
          position: terraMar,
          map: map,
      });
  }

  $scope.initMap();





    $scope.pics.forEach(function(pic, index, arr) {
        var html = "<div class='gridItem'><a class='fancybox' data-fancybox='images' href='" + pic + "'><img src='" + pic + "'alt='pic'></a></div>";
        $(html).appendTo(".gGrid2");
    })
    $(document).ready(function() {

        $("a.fancybox").fancybox({
          touch : true,
          keyboard : true,
          thumbs: true,
          slideShow  : true,
          buttons : true,
          loop: true
        });
      });


})
