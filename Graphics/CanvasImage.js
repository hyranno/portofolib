deps.require("List/WrapperList.js");
deps.require("Graphics/GeneralImage.js");
deps.require("Graphics/Color.js");

Graphics.CanvasImage= function(canvas){
	if (!Graphics.GeneralImage.call(this)) return false;
	this.canvas= canvas;
	this.context = canvas.getContext('2d');
	this.init();
	return this;
};
inherits(Graphics.CanvasImage, Graphics.GeneralImage);

Graphics.CanvasImage.prototype.init= function(){
	this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
	this.data= new List.WrapperList(this.imageData.data);
};
Graphics.CanvasImage.prototype.draw= function(){
	this.context.putImageData(this.imageData, 0, 0);
};

Graphics.CanvasImage.prototype.getWidth= function(){return this.imageData.width};
Graphics.CanvasImage.prototype.getHeight= function(){return this.imageData.height};


