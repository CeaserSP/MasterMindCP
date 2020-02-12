$(document).ready(function () {
    $('#btn-start').click(gameSetup);

    // $("#start-game").hide();
    // $("#in-game").show();
    // $(".main-container").show();

    $("#btn-restart").click(newGame);
    $("#btn-rule").on('click', function (event) {
        $("#rules-text").toggle();
    });
    $("#btn-rules").on('click', function (event) {
        $("#rules-text").toggle();
    });


    // 2 Arrays for generate code to be broken and user guesses
    var code = [];
    var guess = [];
    var guessRow = document.getElementsByClassName("guess-row");
    var btns = document.getElementsByClassName('button');
    var hintsDiv = document.getElementsByClassName("hint-fill");
    // hints
    var incrementHint = 1;

    // increment rows
    var incrementRound = 1;

    // user slots
    var slot = {
        1: "red",
        2: "blue",
        3: "green",
        4: "orange",
        5: "pink",
        6: "yellow"
    };

    // ___________FUNCTIONS_____________
    // game setup
    function gameSetup() {
        $("#start-game").hide();
        $("#in-game").show();
        $(".main-container").show();

        generateCode(1, 6);
        // get button clicked insert into receptor
        $(".button").click(userGuess);
        // console.log("?????????", userGuess(), $(this).attr('id'));
        // newGame();
        console.log("game ready")
    };

    //  a proper generate random code to be broken
    function generateCode(min, max) {
        for (var i = 0; i < 4; i++) {
            code[i] = Math.floor(Math.random() * (max - min + 1) + min);
            console.log(code[i])
        }
    };

    // insert user guess
    function userGuess() {
        // get the current set of slots for the round
        var brdSlot = guessRow[guessRow.length - incrementRound].getElementsByClassName("receptor");
        // insert slot into the corresponding board slot
        console.log(brdSlot)

        brdSlot[guess.length].className = brdSlot[guess.length].className + " " + $(this).attr('id');
        console.log(brdSlot[guess.length].className);
        // insert user guess as value
        guess.push(+(this.value));
        // console.log(this.value);
        // increment Round
        if (guess.length === 4) {
            // call compare
            if (compare()) {
                console.log('win');
            } else {
                incrementRound += 1;
                console.log("loss");
            }
        };
    };

    // compare user guess to code
    function compare() {
        var isMatch = true;
        var checkCode = code.slice(0);
        console.log("^^^^^^^^^^",checkCode)
        // check if user guess is the right color and position
        for (var i = 0; i < code.length; i++) {
            if (guess[i] === code[i]) {
                displayHint("right")
                checkCode = 0;
                guess[i] = -1;
                console.log(guess[i])
            } else {
                isMatch = false;
            }
        }
        // check if user guess is right color but not right postion
        for (var j = 0; j < code.length; j++) {
            console.log("?????????????",checkCode.toString().indexOf(guess[j]))
            if (checkCode.toString().indexOf(guess[j]) !== -1) {
                checkCode[checkCode.toString().indexOf(guess[j])] = 0;
                displayHint("close");
            }
        }
        // move to next set of hints
        incrementHint += 1;
        // reset guess array to empty
        guess = [];
        return isMatch;
    };

    // display hints
    function displayHint(type) {
        // get the current hint
        var hintsP = hintsDiv[hintsDiv.length - incrementHint].getElementsByClassName("hint-receptor");
        console.log("*********", hintsP)
        // add the
        hintsP[code.length].className = "hint-receptor " + type;
    };

    // new game reset board generate new code
    function newGame() {
        guess = []
        incrementHint = 1
        incrementRound = 1
        gameSetup();
    };

    // setup end game 
    function results() {

    };
});
// });