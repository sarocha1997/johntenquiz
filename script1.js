const questions = [
    { 
        image: "images/q1.png", 
        answers: [
            { text: "XXXX", score: 0 },
            { text: "My Bro", score: 0 },
            { text: "ดิกชั่นนารี่", score: 1 },
            { text: "Friend", score: 0 }
        ]
    },
    { 
        image: "images/q2.png", 
        answers: [
            { text: "5 คน", score: 1 },
            { text: "5 ขวบ", score: 0 },
            { text: "5 คน และ 5 ขวบ", score: 0 },
            { text: "ไม่เลือก", score: 0 }
        ]
    },
    { 
        image: "images/q3.png", 
        answers: [
            { text: "5 คน", score: 1 },
            { text: "5 ขวบ", score: 0 },
            { text: "5 คน และ 5 ขวบ", score: 0 },
            { text: "ไม่เลือก", score: 0 }
        ]
    },
    { 
        image: "images/q4.png", 
        answers: [
            { text: "2 > 1 > 4 > 5 > 3 > 6", score: 0 },
            { text: "2 > 1 > 3 > 6 > 4 > 5", score: 1 },
            { text: "2 > 1 > 3 > 6 > 5 > 4", score: 0 },
            { text: "2 > 1 > 3 > 4 > 6 > 5", score: 0 }
        ]
    },
    { 
        image: "images/q5.png", 
        answers: [
            { text: "Baggy Jeans", score: 0 },
            { text: "Misfit", score: 0 },
            { text: "That's Not Fair", score: 1 },
            { text: "90's Love", score: 0 }
        ]
    },
    { 
        image: "images/q6.png", 
        answers: [
            { text: "Make A Wish , Baby Don't Stop", score: 0 },
            { text: "Faded in my last song , From Home", score: 0 },
            { text: "Yestoday , Work it", score: 0 },
            { text: "Show me your love , Work it", score: 1 }
        ]
    },
    { 
        image: "images/q7.png", 
        answers: [
            { text: "NCT Life in Paju", score: 0 },
            { text: "NCT Life in Seoul", score: 0 },
            { text: "NCT Life in Chiangmai", score: 1 },
            { text: "NCT Life in Osaka", score: 0 }
        ]
    },
    { 
        image: "images/q8.png", 
        answers: [
            { text: "Ep.25 , 28 , 39", score: 0 },
            { text: "Ep.25 , 29 , 40", score: 0 },
            { text: "Ep.25 , 27 , 40", score: 1 },
            { text: "Ep.25 , 27 , 41", score: 0 }
        ]
    },
    { 
        image: "images/q9.png", 
        answers: [
            { text: "You're crazy", score: 0 },
            { text: "Ten!!!", score: 0 },
            { text: "Babe", score: 0 },
            { text: "Good Boy", score: 1 }
        ]
    },
    { 
        image: "images/q10.png", 
        answers: [
            { text: "I wanna have xxx with u ___ fat ass! Love you forever darling ^^", score: 0 },
            { text: "I wanna have xxxx with u ___ fat ass!!!! Love you forever darling ^^", score: 1 },
            { text: "I wanna have xxx with u ___ fat aas!! Love you forever darling ^^", score: 0 },
            { text: "I wanna have xx with u ___ fat ass! Love you forever darllng ^^", score: 0 }
        ]
    },
    { 
        image: "images/q11.png", 
        answers: [
            { text: "Chocolate", score: 1 },
            { text: "Gimbap", score: 0 },
            { text: "Cookie", score: 0 },
            { text: "Mu Katha", score: 0 }
        ]
    },
    { 
        image: "images/q12.gif", 
        answers: [
            { text: "Johnny Hyung", score: 0 },
            { text: "My Bro", score: 0 },
            { text: "Darling", score: 0 },
            { text: "Found ya!!!", score: 1 }
        ]
    },
    { 
        image: "images/q13.png", 
        answers: [
            { text: "The Lion King", score: 1 },
            { text: "Star Wars: The Rise of Skywalker", score: 0 },
            { text: "Friend Zone", score: 0 },
            { text: "Frozen 2", score: 0 }
        ]
    },
    { 
        image: "images/q14.png", 
        answers: [
            { text: "รูปที่ 1", score: 0 },
            { text: "รูปที่ 2", score: 0 },
            { text: "รูปที่ 3", score: 0 },
            { text: "ถูกทุกข้อ", score: 1 }
        ]
    },
    { 
        image: "images/q15.png", 
        answers: [
            { text: "รูปที่ 1 , 2 ", score: 1 },
            { text: "รูปที่ 2 , 3 ", score: 0 },
            { text: "รูปที่ 1 , 3 ", score: 0 },
            { text: "ผิดทุกข้อ", score: 0 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;
let selectedScore = 0;
let selectedButton = null;

function loadQuestion() {
    console.log("Load Question:", currentQuestionIndex);
    
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];

        document.getElementById("question-image").src = q.image;
        document.getElementById("answer-buttons").innerHTML = "";
        document.getElementById("next-button").style.display = "none";

        selectedButton = null;
        selectedScore = 0;

        q.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.classList.add("answer-button");

            button.onclick = () => {
                if (selectedButton) {
                    selectedButton.classList.remove("selected");
                }

                selectedButton = button;
                button.classList.add("selected");
                selectedScore = answer.score;

                document.getElementById("next-button").style.display = "block";
            };

            document.getElementById("answer-buttons").appendChild(button);
        });

    } else {
        showResult();
    }
}

function nextQuestion() {
    totalScore += selectedScore;
    console.log("Next Question. Current Index before:", currentQuestionIndex);
    
    currentQuestionIndex++;

    console.log("Current Index after:", currentQuestionIndex);
    
    if (currentQuestionIndex >= questions.length) {
        localStorage.setItem("totalScore", totalScore);
        window.location.href = "result.html";
    } else {
        loadQuestion();
    }
}

document.getElementById("next-button").addEventListener("click", nextQuestion);

loadQuestion();