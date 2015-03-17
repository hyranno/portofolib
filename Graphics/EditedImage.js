deps.require("Graphics/AbstractImage.js");

Graphics.EditedImage=function(src){
	if (!Graphics.AbstractImage.call(this)) return false;
//	if (!(src instanceof Graphics.AbstractImage)) return false;
	this.src = src;
	return this;
};
inherits(Graphics.EditedImage, Graphics.AbstractImage);

Graphics.EditedImage.prototype.get= function(x,y){
	return this.src.get(this.x(x),this.y(y));
};
Graphics.EditedImage.prototype.set= function(x,y,color){
	return this.src.set(this.x(x),this.y(y),color);
};

Graphics.EditedImage.prototype.getWidth= function(){return this.src.getWidth();};
Graphics.EditedImage.prototype.getHeight= function(){return this.src.getHeight()};

Graphics.EditedImage.prototype.x= function(x){return x;};//override for remap
Graphics.EditedImage.prototype.y= function(y){return y;};
