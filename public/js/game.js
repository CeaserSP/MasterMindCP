// $('#btn-start').on('click', function (event) {
//     $("#start-game").hide();
//     $("#in-game").show();
//     $(".main-container").show();
// });

$("#btn-restart").on('click', function (event) {
    // new game function
});

$("#btn-rule").on('click', function (event) {
    $("#rules-text").toggle();
});
$("#btn-rules").on('click', function (event) {
    $("#rules-text").toggle();
});

$(document).ready(function(){
    // 2 Arrays for generate code to be broken and user guesses
    var code = [];
    var guess = [];
    var guessRow = document.getElementsByClassName("guess-row");
    var btns = document.getElementsByClassName('button');
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
    $("#btn-start").on('click', function (event) {
        $("#start-game").hide();
        $("#in-game").show();
        $(".main-container").show();
        newGame();
    });
    $(".button").on('click', function (event) {
        // get the current set of slots for the round
        var brdSlot = guessRow[guessRow.length - incrementRound].getElementsByClassName("receptor");
        // insert slot into the corresponding board slot

        brdSlot[guess.length].className = brdSlot[guess.length].className + " " + $(this).attr('id');;
        console.log(brdSlot[guess.length].className);
        // insert user guess as value
        guess.push(+(this.value));
        // console.log(this.value);
    });
    // game setup
    function gameSetup() {
        generateCode(1, 6);

        // get button clicked insert into receptor
        // $(".button").on('click', function (event) {
        //     userGuess();
        //     console.log("?????????", userGuess(), $(this).attr('id'));
        // });
        // $("#btn-start").on('click', function (event) {
        //     $("#start-game").hide();
        //     $("#in-game").show();
        //     $(".main-container").show();
        //     newGame();
        // })
        // for (var i = 0; i < btns.length; i++) {
        //     btns[i].addEventListener('click', userGuess, false);
        // }
    };
    //  a proper generate random code to be broken
    function generateCode(min, max) {
        for (var i = 0; i < 4; i++) {
            code[i] = Math.floor(Math.random() * (min - max + 1) + min);
        }
    };
    // insert user guess
    // function userGuess() {
    //     // get the current set of slots for the round
    //     var brdSlot = guessRow[guessRow.length - incrementRound].getElementsByClassName("receptor");
    //     // insert slot into the corresponding board slot

    //     brdSlot[guess.length].className = brdSlot[guess.length].className + " " + $(this).attr('id');;
    //     console.log(brdSlot[guess.length].className);
    //     // insert user guess as value
    //     guess.push(+(this.value));
    //     // console.log(this.value);
    // };
    // console.log(userGuess);
    // compare user guess to code
    function compare() {

    };
    // display hints
    function displayHint() {

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