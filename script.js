
const button1=document.getElementById("dislike");
const disableButton=()=>{
    button1.disabled=true;
}
const ableButton=()=>{
    button1.disabled=false;
}
let score=0;
function Direction(Choice){
// The choice of the first buttons 

    if(Choice == "left"){
        score=score+10;
        
        document.getElementById("result").innerHTML = '<br><h2 style="color: rgb(209, 227, 12);">Yay👏 you found the answer. you have a good Eye power..</h2><b> <h2 style="color: rgb(184, 12, 12);">Now answer this question?<br></h2><h2>Mr. John was killed on Saturday after noon. In Police investigation, his butler said he was bathing. His wife said she was reading book. His chef said he was cooking breakfast. His maid said she was folding clothes, and the gardener said he was watering in garden. Police catch hold the culprit, who is the culprit?<br>Scroll down to answer⏬</h2></b>';
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
        document.getElementById('img2').style.display='inline';
        alert(`Your score is ${score}`);
        window.scrollTo(0, 500);

    }
    if(Choice == "right"){
        score=score+5;
        document.getElementById("result").innerHTML = "<h2>You are incorrect!❌</h2><br><h2>But we are giving you a one more chance.<br><br><br><b> Now answer this question?<br>Mr. John was killed on Saturday after noon. In Police investigation, his butler said he was bathing. His wife said she was reading book. His chef said he was cooking breakfast. His maid said she was folding clothes, and the gardener said he was watering in garden. Police catch hold the culprit, who is the culprit?<br>Scroll down to answer📜⏬</h2>";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
        document.getElementById('img2').style.display='inline';
        alert(`Your score is ${score}`);
        window.scrollTo(0, 500);
        
    }
}
   
    
    if(Choice == "escape"){
        
        document.getElementById("result").innerHTML = "<br> HA! Nice try, but you won't get out that easily.<br> <br> Try again... if you dare!<br><br>";
       //making sure the right buttons are displayed
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        document.getElementById('img2').style.display='none';
    }

        
function Direction2(Choice){
    document.getElementById('img2').style.display='none';

        if(Choice == 'left2'){
            score=score+10;
            document.getElementById("result2").innerHTML = '<br><br><h2 >You are Amazing!🎉. Chef is the culprit</h2> <h2>As chef said that he was making breakfast in afternoon, So he is the culprit.<br><br>Now this is the last step towards your treasure hunt.<br> How many triangles are there in the figure? Scroll below to answer</h2>' ;
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById('A').style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
        document.getElementById('triangle').style.display='inline';
        alert(`Your score is ${score}`);
        window.scrollTo(0, 970);
        }
        
        if(Choice == 'right2'){
            document.getElementById("result2").innerHTML = "<br><br><h1>Sorry! Deadend🩻</h1><h2>You chose wife as culprit.<br>But chef is the real culprit because he said he was preparing breakfast in the afternoon. <br> And you're a dead man. Try again if you think you can beat me⏬...<br></h2>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        window.scrollTo(0, 900);
        }
        
        if(Choice == 'escape2'){
            document.getElementById("result2").innerHTML = "<br><h2>You are incorrect🙆‍♂️.You chose to go and find an escape. I guess you're not too smart... <br><br>You died. Try again if you think you can beat me🔁...<br></h2>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
    // document.getElementById("dislike").disabled=false;
}

function Direction3(Choice){
    document.getElementById('triangle').style.display='none';
        if(Choice == "A"){
            score=score+10;
            alert(`Your score is ${score}`);
            document.getElementById('triangle1').style.display='inline';
            document.getElementById("result3").innerHTML = "<br><br><h2>Congrats🏆,You finally made it. Nice one! Or did you just guess like always? Congratulations either way. You're doing better than I expected. </h2>";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        }
        
        if(Choice == "B" || Choice == "C"){
        document.getElementById("result3").innerHTML = "<br><br><h2>Sorry you lost!.Better Luck Next Time🙂... <br>Try again if you want</h2><br>";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        }
        
}


function TryAgain(){ //running the whole code again 
    score=0
    document.getElementById('img2').style.display='none';
    Direction();
    document.getElementById("result3").style.display = 'none';

    document.getElementById('left1').style.display = 'inline';
    document.getElementById("right1").style.display = 'inline';
    document.getElementById("escape1").style.display = 'inline';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("result2").style.display = 'none';
    document.getElementById('tryagain').style.display = 'none';
    document.getElementById("loseGif1").style.display = 'none';
}



function suri(){
    alert(`
    This page contains 3 puzzles.
    After Solving each puzzle only you can able to move on.
    Be careful! there are some dead ends.
    At the end you can find the treasure.
    Assessment Criteria: 
    If score==30, you are good logical thinker
    If 20<=score<30 you can improve
    If score<20 You have to improve your logical thinking greatly `);
};