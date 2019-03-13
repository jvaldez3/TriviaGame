var questions = [{
        question: "Which show won the Tony Award in 2017 for Best Musical?",
        answers: ["Come From Away", "Dear Evan Hansen", "Groundhog Day the Musical", "Natasha, Pierre, & the Great Comet of 1812"],
        correctAnswer: "Dear Evan Hansen"
    },
    {
        question: "Which of these songs is not in the musical 'In the Heights'?",
        answers: ["96,000", "Blackout", "Carnival Del Barrio", "Run, Freedom, Run!"],
        correctAnswer: "Run, Freedom, Run!"
    },
    {
        question: "What year did 'Wicked' the musical come out?",
        answers: ["1999", "2001", "2003", "2005"],
        correctAnswer: "2003"
    },
    {
        question: "Who hosted the 2016 Tony Awards?",
        answers: ["James Corden", "Neil Patrick Harris", "Josh Groban and Sara Bareilles", "Alan Cumming"],
        correctAnswer: "James Corden"
    },
    {
        question: "Who played the original Phantom in 'Phantom of the Opera'?",
        answers: ["Gerard Butler", "Andrew Lloyd Webber", "Michael Crawford", "Ramin Karimloo"],
        correctAnswer: "Michael Crawford"
    },
    {
        question: "Which 2015 musical revival incorporated American Sign Language doubled actors?",
        answers: ["She Loves Me", "Spring Awakening", "Fiddler on the Roof", "The Color Purple"],
        correctAnswer: "Spring Awakening"
    }
];

$("#start").on("click", function () {
    trivia.start();
});

$(document).on("click", "#finished", function () {
    trivia.done();
})

var trivia = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        trivia.counter--;
        $("#counter").html(trivia.counter);
        if (trivia.counter <= 0) {
            trivia.done();
        }
    },
    start: function () {
        timer = setInterval(trivia.countdown, 1000);
        $(".wrapper").prepend("<h2>Time Remaining: <span id = 'counter' >60</span> Seconds</h2>")
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $(".wrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var t = 0; t < questions[i].answers.length; t++) {
                $(".wrapper").append("<input type='radio' name='question-" + i + "'value = '" + questions[i].answers[t] + "'>" + questions[i].answers[t])
            }
        }
        $(".wrapper").append("<br><button id = 'finished' >Done</button>")
    },
    done: function () {
        $.each($("input[name ='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });


        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $(".wrapper h2").remove();
        $(".wrapper").html("<br><h2>Complete! Let's see how you did!</h2>");
        $(".wrapper").append("<br><h4>Correct Answers: " + this.correct + "</h4>");
        $(".wrapper").append("<br><h4>Inorrect Answers: " + this.incorrect + "</h4>");
        $(".wrapper").append("<br><h4>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h4>");
    }
}