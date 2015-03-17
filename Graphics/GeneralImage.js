deps.require("List/List2D.js");
deps.require("Graphics/AbstractImage.js");
deps.require("Graphics/Color.js");

Graphics.GeneralImage=function(){
	if (!Graphics.AbstractImage.call(this)) return false;
	this.data = null;//List
	return this;
};
inherits(Graphics.GeneralImage, Graphics.AbstractImage);

Graphics.GeneralImage.prototype.c= function(i){ return new List.List2D(this.getWidth(),this.getHeight(),new ResampledList(this.data,4,i)); };
Graphics.GeneralImage.prototype.r= function(){return this.c(0);};
Graphics.GeneralImage.prototype.g= function(){return this.c(1);};
Graphics.GeneralImage.prototype.b= function(){return this.c(2);};
Graphics.GeneralImage.prototype.a= function(){return this.c(3);};

Graphics.GeneralImage.prototype.get= function(x,y){
	var i= (y*this.getWidth() +x)*4;
	return new Graphics.Color(this.data.get(i+0), this.data.get(i+1), this.data.get(i+2), this.data.get(i+3));
};
Graphics.GeneralImage.prototype.set= function(x,y,color){
	var i= (y*this.getWidth() +x)*4;
	this.data.set(i+0,color.r), this.data.set(i+1,color.g), this.data.set(i+2,color.b), this.data.set(i+3,color.a);
};

