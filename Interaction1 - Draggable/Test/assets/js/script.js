$(document).ready(function () {
    
    $(document).ready(function () {

       // $("p, #box").draggable();
        $("#box2").draggable({axis: "x"});//Horizontal direction
        $("#box").draggable({axis: "y"});//Vertical direction
        $("#box, #box2").draggable({containment: "#main"});//containment
        //$("#box").draggable();
        
    });

});