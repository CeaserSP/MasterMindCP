$('#btn-start').on('click', function(event){
    $("#start-game").hide();
    $("#in-game").show();
    $(".main-container").show();
});

$("#btn-restart").on('click', function(event){
// new game function
});

$("#btn-rule").on('click', function(event){
    $("#rules-text").toggle();
});
$("#btn-rules").on('click', function(event){
    $("#rules-text").toggle();
});

// 2 Arrays for generate code to be broken and user guesses
var code = [];
var guess = [];

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

//  generate random code to be broken

// insert user guess

// compare user guess to code

// display hints

// new game reset board generate new code

// setup end game 

