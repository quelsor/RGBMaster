$(document).ready(function () {

    $(".color").click(function () {
        if ($(".name").text() !== $(this).css("background-color")) {
            $(".name").text("Loser(");
            $(".color").addClass("lose");
        } else {
            $(".name").text("You win!");
            $(this).addClass("winner");
        }
    });

    $("#restart").click(function () {
        $(".name").text("");
        RGB();
        rightColor();

        $(".instruction").text("");
        $(".color").removeClass("winner lose");
    });

    function RGB() {
        return $(".name").text(`rgb(${randNum()}, ${randNum()}, ${randNum()})`)
    }

    function randNum() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function rightColor() {
        let randomIndex = Math.floor(Math.random() * 6);

        $(".color").each(function () {
            $(this).css("background-color", getRandomColor());
        });

        $(".color").eq(randomIndex).css("background-color", $(".name").text());
    }
});
