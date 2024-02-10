var btnColors=["red" ,"green","blue",'yellow'];
var gamePattern=[];
var userPattern=[];
//alert("hello");
var start=false;
var level=0;
$(document).keypress(function(){
    if(!start){
        $("#level-title").text("level "+level);
        nextSeq();
        start=true;
    }
})

$(".btn").on("click",function(){
    var UserChosenColor=$(this).attr("id");
    userPattern.push(UserChosenColor);
    animatePress(UserChosenColor);
    check(userPattern.length-1);
});

function nextSeq(){
    userPattern=[];
    level++;
    $("#level-title").text("level "+level);
    var randNum=Math.floor((Math.random())*4);
    var randomChosenColor=btnColors[randNum];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    press(randomChosenColor);
}

function check(level){
    if(gamePattern[level]===userPattern[level]){
        if(gamePattern.length===userPattern.length){
            setTimeout(()=>{
                nextSeq();
            },1000);
        }
    }
    else{
        $('body').addClass("over");
        $('#level-title').text("Game Over  Press any key Start Again");
        setTimeout(() => {
            $('body').removeClass("over");
        }, 200);
        startOver();
    }
}

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(()=>{
        $("#"+color).removeClass("pressed");
    },100);
}

function press(color){
    $("#"+color).addClass("fpressed");
    setTimeout(()=>{
        $("#"+color).removeClass("fpressed");
    },100);
}

function startOver(){
    start=0;
    level=0;
    gamePattern=[];
}

