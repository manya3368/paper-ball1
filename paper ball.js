class PaperBall{
    constructor(){
        var boptions={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2

        }
        this.ball = Bodies.circle(50,200,10,boptions);
        World.add(world, this.ball);
      }

      display(){
        push();
        var pos =this.ball.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y, this.ball.x, this.ball.y);
        pop();
      }
    }
    class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}