class Placar {
    constructor(c)
    {
        this.c = c;
        this.direita = this.c.canvas.width;
        this.margem = 10;
        this.margemDireita = 50;
        this.largura = 100;
    }

    resetScore(){
        bolinha.movendo = false;
        pontoJogador1 = 0;
        pontoJogador2 = 0;
        bolinha.x=(this.c.canvas.width/2)-(bolinha.largura/2);
        bolinha.y=(this.c.canvas.height/2)-(bolinha.altura/2);
        bot.x=10;
        bot.y=(this.c.canvas.height/2)-(bot.altura/2);
        cpu.x=(this.c.canvas.width - cpu.largura - 10);
        cpu.y=(this.c.canvas.height/2)-(cpu.altura/2);
        setTimeout(() => {
            textWinner = "";
        },2000)

    }
    draw(){
        this.c.font = "70px arial";
        this.c.fillStyle = "black";
        this.c.fillText(pontoJogador1, this.margem, this.margem + 70, this.largura);
        this.c.fillText(pontoJogador2, this.direita-this.margemDireita, this.margem + 70, this.largura);   
    }
}