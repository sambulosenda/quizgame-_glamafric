//Hard coded images copied into img folder
//[img, correct Answer #, Option 1, Option 2, Option 3, Option 4]

var questions = [

	 ['img/1.png', '2', "RIGHT", "LEFT" ,"BOTH", "MAYBE" , "Are you left or right handed ?"]
    
    , ['img/2.jpg', '2', "A shade lighter than your skin", "Two shades lighter than your skin", "Three shades lighter than your skin", "The Same Skin Tone", "Which shade of concealer best hides dark circles under your eyes?" , "image number 2"]
    
    , ['img/3.jpg', '1', "Contour", "Blush", "Eye Liner", "Lipstick", "  What is this? "]

    , ['img/4.jpg', '4', "A bra insert", "A beauty blender", "Lash applicator", "Make-up palette", "What is this?" ,"image number 4 "]

    , ['img/5.png', '4', "1", "2", "3", "4", "Choose your ideal brow", "image number 5"]

    , ['img/6.jpg', '1', "yes", "no", "Some times", "Special events",  "Do you wear glasses?","what is your name " ]

    , ['img/7.png', '3', "Everyday", "Every week", "Every month", "Never", "How often do you watch YouTube make-up tutorials?"]
 // Note: no comma after last entry
];

var qNo = 0;
var correct = 0;
var cnt = 0;
var corectAnswer = 0;
var answer = '';
var stringquestion = '';



function NextQuestion(response) {
    correctAnswer = questions[qNo][1];
    var temp = parseInt(correctAnswer, 10) + 1;
    answer = questions[qNo][temp];
    document.getElementById('answer').innerHTML = answer;  

    if ((qNo < questions.length) && (response == correctAnswer)) {
        correct++;
    }
    qNo++;

    if (qNo < questions.length) {
        document.getElementById('Pic').src = questions[qNo][0];
        cnt++;
        UpdateOptions();
    } else
    
     {
        //Quiz is finished
        //Remove Button and Image Elements
        finishModal(correct, qNo);
    }
}
 
function UpdateOptions() {
    document.getElementById('qNo').innerHTML =  questions[qNo][6]  ; 
    document.getElementById('opt1').innerHTML = questions[qNo][2];
    document.getElementById('opt2').innerHTML = questions[qNo][3];
    document.getElementById('opt3').innerHTML = questions[qNo][4];
    document.getElementById('opt4').innerHTML = questions[qNo][5];
}


function calculateOpinion(correct, total){
    var frac = (correct/total);
    var lowerThreshold = 0.10;
    var threshold = 0.50;
    var upperThreshold = 0.90;

    if(correct == 0 && total > 0)
    {
        return('Are you kidding me? Not even a single one correct');
    }
    if((frac <= threshold) && frac > lowerThreshold){
        return ('How about you study up on your cars...');
    }
    if(frac >= threshold && frac < upperThreshold){
        return ('Maybe this test was a little too easy.');
    }
    if(frac >= upperThreshold){
        return ("Oh you must think you're cool now. Great Job!");
    }
}

function finishModal(correctScore, totalQuestions) {
   window.open("result.html","_self");
    $(".modal-body").text('You got ' + correctScore + ' out of ' + totalQuestions);
    $(".modal-body-2").text(calculateOpinion(correctScore, totalQuestions));
    ev.preventDefault();
}

onload = function () {
    document.getElementById('Pic').src = questions[0][0];
    UpdateOptions();
}