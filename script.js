$(".button1").click(function() {
    $(".firstImage").attr("src", "https://2798fh36jx1p3dgfq0rb6v93-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/gregory-culmer-844p-q7BXhM-unsplash-1080x675.jpg");
    $(".button1").text("Wait for her");
    $(".button2").text("Lock the door");
});

$(".button2").click(function() {
    $(".button1").text("Save her");
    $(".button2").text("Abandon her");
    $(".firstImage").attr("src", "https://indaily.com.au/wp-content/uploads/2019/02/20111013000350793386-original-850x455.jpg");
});
$(".button1").click(function() {
    $(".button2").hide();
    $(".button1").hide();
    $(".altbutton").show();
    $(".button3").text("Wait for her");
    $(".button4").text("Lock the door");
    $(".2title").text("You reach the abandoned house but notice that your daughter is behind.....Double Click");
});

$(".button2").click(function() {
    $(".button1").hide();
    $(".button2").hide();
    $(".altbutton").hide();
    $(".altbutton2").show();
    $(".button5").text("Save her");
    $(".button6").text("Abandon her");
    $(".2title").text("You start fighting them off but you hear your daughter scream, you see she is being trampled by zombies....Double Click");
});

$(".button3").dblclick(function() {
    $(".firstImage").attr("src", "https://i.pinimg.com/originals/e0/93/7e/e0937e75963263f4973be1034f0f1721.jpg");
    $(".2title").text("She makes it safely and people from inside the abdnaoned house see what you did and decide to help you out");
    $("button").hide();
});
$(".button4").dblclick(function() {
    $(".firstImage").attr("src", "https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1612835091984-WXIG0XSSUUJACQQF3KWG/BEFC838B-FF78-4A92-B57E-B65576CD1DFF.PNG");
    $(".2title").text("You lock the door and see a glimpse of your daughter being eaten, people from the abdnoned house come out and make you a sacrifice because of your actions");
    $("button").hide();
});
$(".button5").dblclick(function() {
    $(".firstImage").attr("src", "https://ak.picdn.net/shutterstock/videos/1026543971/thumb/11.jpg");
    $(".2title").text("You save her but make an equivalent exchange as the zombies feast on you, your daughter begins to sob as people come out the abandoned house and kill the zombies, including you as your corpse lies on the floor");
    $("button").hide();
});
$(".button6").dblclick(function() {
    $(".firstImage").attr("src", "https://videohive.img.customer.envatousercontent.com/files/9b599560-3b5e-42ec-a5d6-9652c64f0288/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5534ac28b6ee0f755ae2a42d771cfd70");
    $(".2title").text("You decide to run towards the abdnoned house, but you see that the people inside have locked the door, you are then left eaten as you are now a zombie");
    $("button").hide();
});