deps.require("Graphics/EditedImage.js");

Graphics.FilteredImage=function(src,kernel,scale){
	if (!Graphics.EditedImage.call(this,src)) return false;
	this.kernel = kernel;
	this.scale = scale;
	this.o= -Math.floor(kernel.length/2);
	return this;
};
inherits(Graphics.FilteredImage, Graphics.EditedImage);

Graphics.FilteredImage.prototype.get= function(x,y){
	var c= new Graphics.Color(0,0,0,255);
	for (var sy=0; sy<this.kernel.length; sy++){
		for (var sx=0; sx<this.kernel.length; sx++){
			c.plus( this.src.get(x+this.o+sx,y+this.o+sy).mul( this.kernel[sy][sx]) );
		}
	}
	return c.mul( this.scale );
};

Graphics.FilteredImage.gaussian3Kernel= [[1,2,1],[2,4,2],[1,2,1]];
Graphics.FilteredImage.gaussian3Scale= 1/16;

Graphics.FilteredImage.gaussian5Kernel= [[1,4,6,4,1],[4,16,24,16,4],[6,24,36,24,6],[4,16,24,16,4],[1,4,6,4,1]];
Graphics.FilteredImage.gaussian5Scale= 1/256;

Graphics.FilteredImage.sobelyKernel= [[-1,-2,-1],[0,0,0],[1,2,1]];
Graphics.FilteredImage.sobelyScale= 1;

Graphics.FilteredImage.sobelxKernel= [[-1,0,1],[-2,0,2],[-1,0,1]];
Graphics.FilteredImage.sobelxScale= 1;

