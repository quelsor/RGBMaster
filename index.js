$("#restart").click(function () {
    RGB();
    rightColor();

    $(".color").click(function () {
        if ($("p").text() !== $(this).css("background-color")) {
            $("p").text("Loser(");
        } else {
            $("p").text("You win!");
        }
    });


    function RGB() {
        return $("p").text(`rgb(${randNum()}, ${randNum()}, ${randNum()})`)
    }

    function randNum() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        let r = Math.floor(Math.random() * 256); // Червоний
        let g = Math.floor(Math.random() * 256); // Зелений
        let b = Math.floor(Math.random() * 256); // Синій

        return `rgb(${r}, ${g}, ${b})`;
    }

    function rightColor() {
        let randomIndex = Math.floor(Math.random() * 6);

        $(".color").each(function () {
            $(this).css("background-color", getRandomColor());
        });

        $(".color ").eq(randomIndex).css("background-color", $("p").text());
    }
});
