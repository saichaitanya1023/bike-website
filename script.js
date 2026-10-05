document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to BIKEZONE!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("BIKEZONE button clicked!");
        });
    });
});
