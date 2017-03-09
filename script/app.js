    var the_number = null;

    $(document).ready(function() {
        the_number = pick_number();
        $("button").click(make_guess);
    });

    function pick_number() {
        var random_number = (Math.floor((Math.random() * 10) + 1));
        return random_number;
    }

    function make_guess() {
        //gets user guess
        var the_guess = $("#guess_input").val();
        //determine % of closeness to correct answer
        var degreeOfCorrect = distance_ratio(the_guess) * 100;
        //indicate closeness of answer with warm or cold
        if (the_guess == the_number) {
            $("#response_div").text("That's correct!!");
        } else if (degreeOfCorrect >= 75) {
            $("#response_div").text('Really Cold!');
        } else if (degreeOfCorrect < 75 && degreeOfCorrect >= 50) {
            $("#response_div").text("That's cold.");
        } else if (degreeOfCorrect < 50 && degreeOfCorrect >= 25) {
            $("#response_div").text("That's warm.");
        } else if (degreeOfCorrect < 25) {
            $("#response_div").text("Hot!!");
        }
    }

    function distance_ratio(guess) {
        //calculate the furthest possible guess from the actual number
        var dist1 = Math.abs(the_number - 1);
        var dist2 = Math.abs(the_number - 10);
        //compares which side provides largest difference
        if (dist1 > dist2) {
            //return ratio of guessed number to furthest possible guess
            return (Math.abs(guess - the_number) / dist1);
        } else {
            return (Math.abs(guess - the_number) / dist2);
        }
    }
