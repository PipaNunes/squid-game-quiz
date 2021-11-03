
//add sound to the first button 
const audio = new Audio();
audio.scr = "./sound/menu_game.mp3"

//funcionar botão next e pergunta anterior desaparecer 
document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
}
//calcular score e mostrar de acordo com as respostas certas 
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    alert("your score is: "+score)
}
//Funcionar botão fullreset 
var fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);




