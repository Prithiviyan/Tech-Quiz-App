var qn = document.querySelectorAll(".questions");
qn.forEach((qns)=>{
    qns.addEventListener("click",(e)=>{
        var touch =e.target.closest("button")
        
        var buttonEach = qns.querySelectorAll("button");
        buttonEach.forEach((btn)=>{
            if(touch!=btn){
                btn.disabled=true
                touch.disabled=false
            }
        })
        
        })
})

const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");

// Hide container1 initially
container1.style.display = "none";

// Get references to buttons
const prevButton = document.querySelector(".btn1");
const submitButton = document.querySelector(".btn2");
const nextButton = document.querySelector(".btn3");

// Set up click event listeners for buttons
nextButton.addEventListener("click", function () {
    // Hide container
    container.style.display = "none";
    // Show container1
    container1.style.display = "flex";
});

prevButton.addEventListener("click",()=>{
    // Show container
    container.style.display = "block";
    // Hide container1 and clear content
    container1.style.display = "none";
})

function endQuiz(){ 
    clearInterval(timerInterval) 
    } 
    let timerInterval 
    let timeLeft=100; 
    function startTimer() { 
      timerInterval = setInterval(function() { 
        timeLeft--; 
         
        document.getElementById("timer").innerText= timeLeft; 
     
     
        if (timeLeft <= 0) { 
          endQuiz(); 
          result(); 
        } 
      }, 1000); 
    } 
    window.addEventListener("load",startTimer) 
     
    let submit=document.getElementById("submit") 
    let quizcontainer=document.querySelector(".whole"); 
    let resultpage=document.querySelector(".result-page"); 
     
    function calculateCorrectAnswers() { 
      let correctAnswersCount = 0; 
     
      for (let i = 1; i <= 10; i++) { 
          const selectedOption = document.querySelector(`.questions${i} .answers .ans`); 
          console.log(selectedOption); 
     
          if (selectedOption) { 
              correctAnswersCount++; 
          } 
      } 
    document.querySelector(".show-ans").innerText=`Total Correct Answers: ${correctAnswersCount}` 
      
      console.log(`Total Correct Answers: ${correctAnswersCount}`); 
    }

    function result(){ 
        quizcontainer.style.display="none"; 
        resultpage.style.display="block"; 
        endQuiz(); 
        calculateCorrectAnswers(); 
        } 
        submit.addEventListener("click",result)
        