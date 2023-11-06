$("h1").css("background-color", "red");
$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").html("<em>Hey</em>")
$("img").attr("src");
$("a").attr("href","https://yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "blue");
});

$(document).keypress(function(e) {
    $("h1").text(e.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "orange");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

//$("button").remove();

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});