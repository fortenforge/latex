let totalSeconds = 0;
let t;

toHHMMSS = function(secs) {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

function add() {
    totalSeconds++;
    $("#timer").text(toHHMMSS(totalSeconds));
    timer();
}

function timer() {
    setTimeout(add, 1000);
}

function reset() {
    totalSeconds = 0;
    $("#timer").text(toHHMMSS(totalSeconds));
}

function stop() {
    clearTimeout(t);
}

$(document).ready(function() {
    loadBodyText();
    let oldVal;
    let problemNumber = 0;
    let numCorrect = 0;
    $("#score").text(0);

    function loadBodyText() {
        renderMathInElement(document.body, {
            options: { 
                throwOnError: false,
                display: false
            }
        });
    }

    function loadProblem() {
        // clear current work
        $('#out').empty();
        $('#user-input').val('');

        // reset styling
        $('#out').parent().removeClass("correct");
        $('#user-input').prop("disabled", false);
        $('#user-input').focus();

        // load problem
        let target = problems[Math.floor(Math.random()*problems.length)];
        problemNumber += 1;

        // load problem text

        katex.render(
            "\\textbf{Problem " + problemNumber + ": " + target.title + "}", 
            $("#problem-title")[0], 
            {
                throwOnError: false,
                displayMode: false
            }
        );

        // load problem body
        katex.render(target.latex, $("#target")[0], {
            throwOnError: false,
            displayMode: true
        });

        oldVal = "";
    };

    function validateProblem() {
        let currentVal = $("#user-input").val();
        if(currentVal == oldVal) {
            return; // check to prevent multiple simultaneous triggers
        }

        oldVal = currentVal;
        // action to be performed on textarea changed
        katex.render(currentVal, $("#out")[0], {
            throwOnError: false,
            displayMode: true
        });

        html2canvas($('#target'),{
            onrendered: function (targetCanvas) {
                $('#out').parent().removeClass("correct");
                let width = targetCanvas.width;
                let height = targetCanvas.height;
                let targetData = targetCanvas.getContext("2d").getImageData(0, 0, width, height);
                html2canvas($('#out'),{
                    onrendered: function (outCanvas) {
                        let outData = outCanvas.getContext("2d").getImageData(0, 0, width, height);
                        let diff = pixelmatch(targetData.data, outData.data, undefined, width, height, {threshold: 0.1});
                        let result = "";
                        console.log("diff is " + diff)
                        if (diff < 10) {
                            numCorrect += 1;

                            // Styling changes
                            $('#out').parent().addClass("correct");
                            $('#user-input').prop("disabled", true);
                            $("#score").text(numCorrect);

                            // Load new problem
                            setTimeout(loadProblem, 1500);
                        }
                    }
                });
            }
        });
    }

    $("#skip-button").click(function() {
        loadProblem();
    });

    $("#user-input").on("change keyup paste", function() {
        validateProblem()
    });


    // Reset and start the timer
    reset();
    timer();
    loadProblem();
});
