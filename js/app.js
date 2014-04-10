$(document).ready(function() {
	
	
	var qandA = function(question, choice0, choice1, choice2, choice3, id) {
		this.question = question;
		this.choice0 = choice0;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.id = id
	}
	
	//private answer bank
	var answers = function(correctAnswer) {
		this.correctAnswer= correctAnswer;
	}
	
	//sets the choices users will see
	var questionsAndAnswers = new Array() 
		
		questionsAndAnswers[0] = new qandA("why?", "right answer 0", "wrong answer 0", "wrong answer 0", "wrong answer 0", 0);
		questionsAndAnswers[1] = new qandA("what?", "wrong answer 1", "right answer 1", "wrong answer1", "wrong answer1", 1);
		questionsAndAnswers[2] = new qandA("when?", "right answer 2", "wrong answer 2", "wrong answer2", "wrong answer2", 2);
		questionsAndAnswers[3] = new qandA("where?", "wrong answer 3", "wrong answer 3", "right answer 3", "wrong answer3", 3);

	//creates an answer bank; place the right answer in here
	var answerBank = new Array()
		answerBank[0] = new answers("right answer 0");
		answerBank[1] = new answers("right answer 1");
		answerBank[2] = new answers("right answer 2");
		answerBank[3] = new answers("right answer 3");
	
	
	//start program
	var count = 0
	var master = function () {
	
	
		//randomize questions
	    var randomizeQuestions = function () {
	    	questionsAndAnswers.sort(function () {
				return Math.floor(Math.random()*4);
			});
		
			for (var i = 0; i < questionsAndAnswers.length; i++) {
				console.log(questionsAndAnswers[i]);
			};
	
		}
		//initialize the randomize question method
		var test = new randomizeQuestions();
	
	
		//append questions
		$("#continueButton").on("click", function() {
			
			var qa = questionsAndAnswers[0]
			
			//sets the variables for the choices
			//only change this if the variables of the class qandA changes
			var r = qa.choice0;
			var x = qa.choice1;
			var y = qa.choice2;
			var z = qa.choice3;
			
			//pushes first array to the end
			console.log(qa);
			a = questionsAndAnswers.shift();
			questionsAndAnswers.push(a);
			
			//counts how many times the button was clicked
			count = count + 1;
			console.log(count);
			
			//select question out of the class and replaces it as the header
			$("h2").text(qa.question);
			
			//selects the choice out of the class and replaces it as the question
			$("#questionZero").text(r); 	//choice 0
			$("#questionOne").text(x); 		//choice 1
			$("#questionTwo").text(y); 		//choice 2
			$("#questionThree").text(z); 	//choce 3
			
			//changes the value of the radio button to correspond to the value of the the choice
			$("#q0").val(r); //q0 retreives form ID from html file
			$("#q1").val(x);
			$("#q2").val(y);
			$("#q3").val(z);
			
			//compares value of selected radio button with the right answer
			
			var leadToAnswer = $('input[name=quiz]:checked').val()
			for (i = 0; i<answerBank.length; i++)
			{
				if (this.answers = leadToAnswer) {
					
				}
				else{
				
				}
			
			}
		
			

		});

	}
	
	var masterTest = new master();

	
});