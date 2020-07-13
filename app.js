$(document).ready(()=>{
    $(document).keypress(function(e) { 
        if(e.keyCode == 32 ) {
            var a = $("#space")[0];
            a.currentTime = 0;
            a.play();
            
            
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 65 ) {
            var a = $("#a")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 83 ) {
            var a = $("#S")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 68 ) {
            var a = $("#d")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 87 ) {
            var a = $("#w")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 70 ) {
            var a = $("#f")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 74 ) {
            var a = $("#j")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 75 ) {
            var a = $("#k")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 76 ) {
            var a = $("#l")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 81 ) {
            var a = $("#q")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 69 ) {
            var a = $("#e")[0];
            a.currentTime = 0;
            a.play();
        }
    });
    $(document).keypress(function(e) { 
        if(e.keyCode == 82 ) {
            var a = $("#r")[0];
            a.currentTime = 0;
            a.play();
        }
    });
// its for colors

    $(document).keypress(function(e) { 
        if( e.keyCode == 32 || 
            e.keyCode == 65 || 
            e.keyCode == 83 ||
            e.keyCode == 68 ||
            e.keyCode == 87 ||
            e.keyCode == 70 ||
            e.keyCode == 74 ||
            e.keyCode == 75 ||
            e.keyCode == 76 ||
            e.keyCode == 81 ||
            e.keyCode == 69 ||
            e.keyCode == 82 
) {
           setRandomColor();
            
        }
    });
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      function setRandomColor() {
        $(".a").css("background-color", getRandomColor());
        $(".b").css("background-color", getRandomColor());
        $(".c").css("background-color", getRandomColor());
        $(".d").css("background-color", getRandomColor());
        $(".e").css("background-color", getRandomColor());
        $(".f").css("background-color", getRandomColor());
        $(".g").css("background-color", getRandomColor());
        $(".h").css("background-color", getRandomColor());
        $(".i").css("background-color", getRandomColor());
        $(".j").css("background-color", getRandomColor());
        $(".k").css("background-color", getRandomColor());
        $(".l").css("background-color", getRandomColor());
      } 
    


})


