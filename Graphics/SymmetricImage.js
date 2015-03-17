deps.require("Graphics/EditedImage.js");

Graphics.SymmetricImage=function(src){
	if (!Graphics.EditedImage.call(this,src)) return false;
	return this;
};
inherits(Graphics.SymmetricImage, Graphics.EditedImage);

Graphics.SymmetricImage.index= function(i,l){return Math.abs((Math.abs(i)+(l-1))%(2*(l-1))-(l-1));};
Graphics.SymmetricImage.prototype.x= function(x){return Graphics.SymmetricImage.index(x,this.getWidth());};
Graphics.SymmetricImage.prototype.y= function(y){return Graphics.SymmetricImage.index(y,this.getHeight());;};
