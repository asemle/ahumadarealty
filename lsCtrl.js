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
          // styles: [
          //   {elementType: 'geometry', stylers: [{color: '#555555'}]},
          //   {elementType: 'labels.text', stylers: [{visibility: "off", font: 'AvenirLTStd-Roman' }]},
          //   {elementType: 'labels.text.fill', stylers: [{color: '#746855', font: 'AvenirLTStd-Roman'}]},
          //   {
          //     featureType: 'administrative.locality',
          //     elementType: 'labels',
          //     stylers: [{visibility: "off" }]
          //   },
          //   {
          //     featureType: 'poi',
          //     elementType: 'labels',
          //     stylers: [{visibility: "off" }]
          //   },
          //   {
          //     featureType: 'poi.park',
          //     elementType: 'geometry',
          //     stylers: [{ opacity: "0.2" }]
          //   },
          //   {
          //     featureType: 'poi.park',
          //     elementType: 'labels',
          //     stylers: [{ opacity: "0.2"}]
          //   },
          //   {
          //     featureType: 'road',
          //     elementType: 'geometry',
          //     stylers: [{color: '#38414e'}]
          //   },
          //   {
          //     featureType: 'road',
          //     elementType: 'geometry.stroke',
          //     stylers: [{color: '#212a37'}]
          //   },
          //   {
          //     featureType: 'road',
          //     elementType: 'labels',
          //     stylers: [{  visibility: "off" }]
          //   },
          //   {
          //     featureType: 'road.highway',
          //     elementType: 'geometry',
          //     stylers: [{color: '#333'}]
          //   },
          //   {
          //     featureType: 'road.highway',
          //     elementType: 'geometry.stroke',
          //     stylers: [{color: '#333'}]
          //   },
          //   {
          //     featureType: 'road.highway',
          //     elementType: 'labels.text.fill',
          //     stylers: [{color: '#fff'}]
          //   },
          //   {
          //     featureType: 'transit',
          //     elementType: 'geometry',
          //     stylers: [{color: '#2f3948'}]
          //   },
          //   {
          //     featureType: 'transit.station',
          //     elementType: 'labels.text.fill',
          //     stylers: [{color: '#fff'}]
          //   },
          //   {
          //     featureType: 'water',
          //     elementType: 'geometry',
          //     stylers: [{color: '#303030'}]
          //   },
          //   {
          //     featureType: 'water',
          //     elementType: 'labels.text.fill',
          //     stylers: [{color: '#fff'}]
          //   },
          //   {
          //     featureType: 'water',
          //     elementType: 'labels.text.stroke',
          //     stylers: [{color: '#fff'}]
          //   }
          // ]
      });
      var marker = new google.maps.Marker({
          position: terraMar,
          map: map,
          // icon: '../../styles/images/icons/mappin.png'
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
            // 'transitionIn': 'elastic',
            // 'transitionOut': 'elastic',
            // 'speedIn': 600,
            // 'speedOut': 200,
            // 'overlayShow': true,
            // 'frameWidth': 497,
            // 'showNavArrows': true,
            // 'padding': 0,
            // 'overlayColor': '#666',
            // 'slideShow': true,
            // 'arrows' : true,
            // 'loop': true,
            // 'buttons': true

        });
      });


})
