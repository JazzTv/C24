class bird 
{
    constructor(xpos,ypos)
    { 
        var bird_options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
                          }
        this.body = Bodies.rectangle(xpos,ypos,50,50,bird_options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body); 
    } 

    display()
    {
        var position = this.body.position;
        position.x = mouseX;
        position.y = mouseY;
        var angle = this.body.angle;

        push()
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        fill('red');
        rect(0,0,this.width,this.height);
        pop()
    }
}