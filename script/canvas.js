canvas = document.querySelector("canvas")

canvas.width = 600;
canvas.height = 600;

c = canvas.getContext("2d")


function desenha(){

caixa = new Image ()
caixa.src = "assests/caixa.png"
c.drawImage(agua, 100, 100 ,100, 100)

}