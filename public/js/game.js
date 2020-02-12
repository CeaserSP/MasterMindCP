$('#btn-start').on('click', function (event) {
    $("#start-game").hide();
    $("#in-game").show();
    $(".main-container").show();
});

$("#btn-restart").on('click', function (event) {
    // new game function
});

$("#btn-rule").on('click', function (event) {
    $("#rules-text").toggle();
});
$("#btn-rules").on('click', function (event) {
    $("#rules-text").toggle();
});

$(function () {
    // 2 Arrays for generate code to be broken and user guesses
    var code = [];
    var guess = [];
    var guessRow = document.getElementsByClassName("guess-row");
console.log("^^^^^^^^^^^^^",guessRow);
    // hints
    var incrementHint = 0;

    // increment rows
    var incrementRound = 0;

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
    $(function gameSetup() {

    });
    //  generate random code to be broken
    $(function generateCode() {
        for (var i = 0; i < 4; i++) {
            code[i] = Math.floor(Math.random() * 7);
        }
    });
    // insert user guess
    $(function userGuess() {
        console.log(guessRow);
        // get the current set of slots for the round
        var brdSlot = guessRow[1]
        console.log('??????????????',brdSlot);
        
    });
    // console.log(userGuess);
    // compare user guess to code
    $(function compare() {

    });
    // display hints
    $(function displayHint() {

    });
    // new game reset board generate new code
    $(function newGame() {

    });
    // setup end game 
    $(function results() {

    });
}); 