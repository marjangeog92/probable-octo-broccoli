// //When the RUN button is pressed...
// hideElement("JumpButton");
// hideElement("ThrowButton");
// //hideElement("EndText");
// // hideElement("StartOver");
// hideElement("jumphome");
// hideElement("throwhome");
//hideElement("Endimg");


//When the RBACK button is pressed...
// onEvent("RBack", "click", function( ) {
// //   playSound("sound://category_app/app_interface_button_3.mp3", false);
// //   showElement("JumpButton");
// //   showElement("jumphome");
// //   setScreen("Home");
// });


//go to the HOME screen
//when the JUMP button is pressed ...
// onEvent("JumpButton", "click", function( ) {
//   // go to the JUMP screen.
// //   playSound("sound://category_app/app_interface_button_3.mp3", false);
//   setScreen("Jump");
// });
//When the JBACK button is pressed...
// onEvent("JBack", "click", function( ) {
//   //go to the HOME page.
// //   playSound("sound://category_app/app_interface_button_3.mp3", false);
//   showElement("ThrowButton");
//   showElement("throwhome");
//   setScreen("Home");
// });
//When the THROW button is pressed...
// onEvent("ThrowButton", "click", function( ) {
//   //go to the THROW screen.
// //   playSound("sound://category_app/app_interface_button_3.mp3", false);
//   setScreen("Throw");
// });
//When the TBACK button is pressed...
// onEvent("TBack", "click", function( ) {
//   //go to the HOME screen.
// //   playSound("sound://category_app/app_interface_button_3.mp3", false);
//   playSound("sound://category_background/synthesize.mp3", false);
//   setScreen("Home");
//   showElement("EndText");
//   showElement("StartOver");
//   showElement("Endimg");
//   hideElement("runh");
//   hideElement("RunButton");
//   hideElement("throwhome");
//   hideElement("ThrowButton");
//   hideElement("jumphome");
//   hideElement("JumpButton");
// });
// onEvent("StartOver", "click", function( ) {
//   playSound("sound://category_app/pause_button.mp3", false);
//   stopSound("sound://category_background/synthesize.mp3");
//   showElement("runh");
//   showElement("RunButton");
//   hideElement("StartOver");
//   hideElement("EndText");
//   hideElement("Endimg");
// });
// onEvent("RBack", "click", function( ) {
//   showElement("jumphome");
// });
// onEvent("JBack", "click", function( ) {
//   showElement("throwhome");
// });
// onEvent("startQuiz", "click", function( ) {
//   setScreen("quizScreen")
//   stopSound("sound://category_background/synthesize.mp3");
// });


var event1="";
var event2="";
var event3="";
var event4="";
var event5="";
var event6="";
var event7="";
var score = 0;
var userAnswers=[]
var correctAnswers=["100 meter hurdles", "high jump", "shot put", "200 meter dash","long jump","javelin", "800 meter run"];


onEvent("dropdown1", "change", function(){
   event1= getProperty("dropdown1", "value");
   
   appendItem(userAnswers, event1)
});

onEvent("dropdown2", "change", function(){
   event2= getProperty("dropdown2", "value");
   appendItem(userAnswers, event2)
});
onEvent("dropdown3", "change", function(){
   event3= getProperty("dropdown3", "value");
   appendItem(userAnswers, event3)
});
onEvent("dropdown4", "change", function(){
   event4= getProperty("dropdown4", "value");
   appendItem(userAnswers, event4)
});
onEvent("dropdown5", "change", function(){
   event5= getProperty("dropdown5", "value");
   appendItem(userAnswers, event5)
});
onEvent("dropdown6", "change", function(){
   event6= getProperty("dropdown6", "value");
   appendItem(userAnswers, event6)
});
onEvent("dropdown7", "change", function(){
   event7= getProperty("dropdown7", "value");
   appendItem(userAnswers, event7)
});

onEvent("checkQuiz","click", function(){
    score=0; 
    userAnswers=[
        getProperty("dropdown1","value"),
        getProperty("dropdown2","value"),
        getProperty("dropdown3","value"),
        getProperty("dropdown4","value"),
        getProperty("dropdown5","value"),
        getProperty("dropdown6","value"),
        getProperty("dropdown7","value"),
        ]
//This for loop looks at user quiz inputs and matches it with the 
//correct answsers to then score the quiz in the console but 
//also scores on the screen.
    for (var i=0;i<userAnswers.length;i++){
        if(userAnswers[i] === correctAnswers[i]){
            score++;
            console.log("item " + (i+1) + " is correct!")
            console.log("score: " + score)

        } else {
            console.log("item " + (i+1) + " is wrong")
            console.log("score: " + score)
        }
    }
//below is my function that displays the quiz score on the screen

    updateScreen();
});

   function updateScreen() {
    setText("quizScore", "Score: " + score)
}