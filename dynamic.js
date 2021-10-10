var buttonContainer = document.getElementById("button-positioning");
var buttons = document.getElementsByClassName("buttons");
var audio = new Audio();
var timePassed = 200;

audio.src = `The_Aluminium_Tough_-_Round_The_Twist.mp3`;
audio.currentTime = timePassed;

const buttonClicked = () => {
    if (buttons[0].style.display === "block") {
        audio.play();
        buttons[0].style.display = "none";
        buttons[1].style.display = "block";
    } else if (buttons[1].style.display === "block") {
        audio.pause();
        buttons[1].style.display = "none";
        buttons[0].style.display = "block";
    } else if (buttons[2].style.display === "block") {
        audio.currentTime = 0;
        audio.play();
        buttons[2].style.display = "none";
        buttons[1].style.display = "block";
    }
};
buttonContainer.addEventListener("click", buttonClicked);

audio.addEventListener("ended", () => {
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    buttons[2].style.display = "block";
});