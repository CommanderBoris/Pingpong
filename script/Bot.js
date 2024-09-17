class Bot{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.largura=80;
        this.altura=100;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;

        this.raqueteImagem = new Image ();
        this.raqueteImagem.width = 85;
        this.raqueteImagem.height = 85;
        this.raqueteImagem.src = "assests/raquete1.jpg";
        this.raqueteImagem.addEventListener('load', () => {
            this.draw()
        });

        

    }
    management(){
        
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;
    }
    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.drawImage(this.raqueteImagem, this.x, this.y, this.raqueteImagem.width, this.raqueteImagem.height);
    }
}