class Jogador{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=0;
        this.y=0;
        this.vel=5;
        this.jump=10;
        this.fly=5;
        this.gravity=12;
        this.pyro = new Image ();
        this.pyro.src = "assests/pyro.png";
        this.pyro.width=120;
        this.pyro.height=150;
        this.pyro.addEventListener('load',()=>{
           this.draw()
        })

    }
    management(){
        if (this.keyboard.esquerda) 
            if (this.x > 0)
                this.x-=this.vel;
        if (this.keyboard.direita) 
            if (this.x < this.c.canvas.width-this.pyro.width){
                this.x+=this.vel;
            }
        if (this.keyboard.cima) 
            if (this.y > 0)
                this.y-=this.jump;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.pyro.height) 
                this.y+=this.gravity;

        if (this.keyboard.pulo)  
           if (this.y > 0)  
               this.y-=this.jump;
        if (this.keyboard.pulo==false) 
           if (this.y < this.c.canvas.height-this.pyro.height)  
           this.y+=this.gravity;   
            
    }
    draw(){
        this.management();
        this.c.drawImage(this.pyro, this.x, this.y, this.pyro.width, this.pyro.height);
    }
}