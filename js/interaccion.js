$(document).ready(function(){ 
    var chil = $(".chilito");
    chil.mouseenter(function(){
        var nomreg = $(this).attr("name");
        $("#tit").text(nomreg);
        $(this).fadeTo("fast",0);
        console.log("no");
    });

    chil.mouseleave(function(){
        $(this).fadeTo("fast",1);
        $("#tit").text("Región");
        console.log("tampoco");
    });
});

