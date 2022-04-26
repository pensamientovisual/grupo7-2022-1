$(document).ready(function(){ 
    var chil = $(".chilito");
    chil.mouseenter(function(){
        var nomreg = $(this).attr("name");
        $("#tit").text(nomreg);
        $(this).fadeTo("fast",0.5);
        console.log("no");
    });

    chil.mouseleave(function(){
        $(this).fadeTo("fast",1);
        console.log("tampoco");
    });

});