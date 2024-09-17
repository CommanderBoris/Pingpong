class Cpu{
    constructor(c, bolinha){
        this.c = c;
        this.bolinha = bolinha;
        this.largura=80;
        this.altura=100;
        this.x=this.c.canvas.width - this.largura - 5;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        this.meioY = Math.random() * this.altura;

        this.raquetImagem = new Image ();
        this.raquetImagem.width = 85;
        this.raquetImagem.height = 85;
        this.raquetImagem.src = "assests/raquete2.png";
        this.raquetImagem.addEventListener('load', () => {
            this.draw()
        });
        

    }
    management(){
        
        if ((this.bolinha.dirX > 0) && (this.bolinha.x > (this.c.canvas.width/2)))
        {
            if (this.bolinha.y + (this.bolinha.altura/2) > (this.y+this.meioY))
                this.y += this.vel;
            if (this.bolinha.y + (this.bolinha.altura/2) < (this.y+this.meioY))
                this.y -= this.vel;
        }
        if ((this.x <= this.bolinha.x + this.bolinha.largura) && (this.x + this.largura >= this.bolinha.x) 
            && ((this.y + this.altura >= this.bolinha.y) && (this.y <= this.y <= this.bolinha.altura + this.bolinha.y)))
            {
                this.bolinha.dirX = -1;
                this.bolinha.dirY = ((this.bolinha.y + (this.bolinha.altura/2))-(this.y +(this.altura/2)))
            }
            //colisao
            if ((this.x <= this.bolinha.x + this.bolinha.largura) && (this.x + this.largura >= this.bolinha.x)&& ((this.y + this.altura >= this.bolinha.y) 
            && (this.y <= this.bolinha.altura+ this.bolinha.y)))
            {
                this.bolinha.dirX = -1;
                this.bolinha.dirY = ((this.bolinha.y + (this.bolinha.altura/2)) - (this.y + (this.altura/2)))/16;
                this.meioY = Math.random() * this.altura;
            }
    
    }
    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.drawImage(this.raquetImagem, this.x, this.y, this.raquetImagem.width, this.raquetImagem.height);
    }
}