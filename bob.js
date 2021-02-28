class paper
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
			this.body=Bodies.circle(x,y,width,height);
			this.width=width;
			this.height=height;
			World.add(world,this.body);
		}
		display(){
			var pos=this.body.position;
			ellipseMode(RADIUS);
			fill("pink");
			ellipse(pos.x,pos.y,this.width,this.height);
			
		}
	};
		