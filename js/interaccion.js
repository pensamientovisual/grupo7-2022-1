$(document).ready(function(){ 
    var chil = $(".chilito");
    chil.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
        console.log("no");
    });

    chil.mouseleave(function(){
        $(this).fadeTo("fast",1);
        console.log("tampoco");
    });

    $(".Parrafos").hide()

    var nort = $("#Norte");
    var su = $("#Sur");

    nort.mouseenter(function(){
        $("#Nort").show();
        console.log("hehe");
    });
    nort.mouseleave(function(){
        $("#Nort").hide();
        console.log("hehe2");
    });

    su.mouseenter(function(){
        $("#Su").show();
        console.log("hehe33");
    });
    su.mouseleave(function(){
        $("#Su").hide();
        console.log("hehe3");
    });

    var cent = $("#Centro");
    cent.mouseenter(function(){
        $("#Cent").show();
        console.log("hehe");
    });
    cent.mouseleave(function(){
        $("#Cent").hide();
        console.log("hehe2");
    });
});



