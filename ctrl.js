angular.module("app")
.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        console.log(eID)
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});

angular.module("app")
.controller('ctrl', function($scope, $state, $location, anchorSmoothScroll) {
var pics = ["media/Terra Mar/Front Exterior.jpg", "media/Terra Mar/pic 3.jpg", "media/Terra Mar/pic 4.jpg", "media/Terra Mar/pic 5.jpg", "media/Terra Mar/pic 10.jpg", "media/Terra Mar/pic 11.jpg", "media/Terra Mar/Screen Shot 2016-11-04 at 2.00.13 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.00.26 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.00.42 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.01.06 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.01.19 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.01.32 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.01.42 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.01.53 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.02.08 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.02.20 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.02.38 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.02.49 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.02.59 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.03.13 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.05.13 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.05.52 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.06.28 AM.png", "media/Terra Mar/Screen Shot 2016-11-04 at 2.06.47 AM.png"]
    $scope.gotoElement = function (eID){
      console.log("fff")
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);

    };
    pics.forEach(function(pic, index, arr) {
        var html = "<div class='cell' ui-sref='listings'><a ui-sref='listings'><img ui-sref='listings' alt='image' src='"+ pic +"'><div class='hoverInfo'><h4>1711 West Terra Mar Drive, Pompano Fl</h4><h5>4 bed, 2.0 bath, 1911 sqft</h5></div></a></div>";
        $(html).appendTo("#subheader");
      })

        $('#subheader').flickity({
                cellSelector: '.cell',
                cellAlign: 'left',
                contain: true,
                wrapAround: true,
                // draggable: false,
                // setGallerySize: false,
                pageDots: false,
              })
              $('#subheader').on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
                if ( cellElement ) {
                  $('#subheader').flickity({
                    draggable: false, // not working
                    pageDots: false, // not working
                    prevNextButtons: false //not working
                  });
                  $state.go('listings');
                }

              });
              pics.forEach(function(pic, index, arr) {
                  var html = "<div class='gridItem'><a class='fancybox' rel='gallery1' href='" + pic + "'><img src='" + pic + "'alt='pic'></a></div>";
                  $(html).appendTo(".gGrid2");
                })
              $(document).ready(function() {




  $("a.fancybox").fancybox({
   'transitionIn'	:	'elastic',
   'transitionOut'	:	'elastic',
   'speedIn'		:	600,
   'speedOut'		:	200,
   'overlayShow'	:	true,
   'frameWidth' : 497,
   'padding' : 0,
   'overlayColor' : '#666'
 });
});

});
