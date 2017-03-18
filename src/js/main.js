$(document).ready(function(){
    $("#contact").on("hide.bs.collapse", function(){
        $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Mano kontaktai');
    });
    $("#contact").on("show.bs.collapse", function(){
        $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Uždaryti');
    });
});