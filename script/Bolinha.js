class Bolinha{
    constructor(c,bot){
        this.c = c;
        this.bot = bot;
        this.largura=20;
        this.altura=20;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.x=(this.c.canvas.width/2)-(this.largura/2);
        this.vel=5;
        this.dirX=0;
        this.diry=0;
        this.movendo = false;

        this.bolaImagem = new Image ();
        this.bolaImagem.width = 30;
        this.bolaImagem.height = 30;
        this.bolaImagem.src = "assests/ball.png";
        this.bolaImagem.addEventListener('load', () => {
            this.draw()
        });

    }

    iniciar(){
        this.movendo=true;
        this.dirX = -1;
        this.diry = (Math.random()*10 > 5 ? -1 : 1);
    }
    management(){
        if (this.movendo){
            this.x += (this.dirX * this.vel);
            this.y += (this.diry * this.vel);
            if (this.x >= (this.c.canvas.width - this.largura)){
                this.dirX = -1;
                pontoJogador1++;
                this.resetBall();
            }
            if (this.x <= 0){
                this.dirX = 1;
                pontoJogador2++;
                this.resetBall();

            }
            if (this.y >= (this.c.canvas.height - this.altura)){
                this.diry = -1;
            }
            if (this.y <= 0){
                this.diry = 1;      
            }

            if ((this.x <= this.bot.x + this.bot.largura) && (this.x + this.largura >= this.bot.x) 
            && ((this.y + this.altura >= this.bot.y) && (this.y <= this.y <= this.bot.altura + this.bot.y)))
            {
                this.dirX = 1;
            }
            if ((this.x <= this.bot.x + this.bot.largura) 
            && (this.x + this.largura >= this.bot.x) 
            && ((this.y + this.altura >= this.bot.altura+this.bot.y)))
            {
                this.dirX = 1;
                this.diry = ((this.y + (this.altura/2)) - (this.bot.y + (this.bot.altura/2)))/16;
            }
        }
        
       
    }
    resetBall()
    {
        this.movendo=false;
        setTimeout(() => 
        { 
            this.x=(this.c.canvas.width/2)-(this.largura/2);
            this.y=(this.c.canvas.height/2)-(this.altura/2);
            bot.x=5;
            bot.y=(this.c.canvas.height/2)-(pad.altura/2);
            cpu.x=(this.c.canvas.width - cpu.largura - 5);
            cpu.y=(this.c.canvas.height/2)-(cpu.altura/2);
        }, 1000);
    }

    draw(){
        this.management();
        this.c.fillStyle = "white";
        this.c.drawImage(this.bolaImagem, this.x, this.y, this.bolaImagem.width, this.bolaImagem.height);
    }
}