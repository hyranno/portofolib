Graphics.AbstractImage= function(){return this};

Graphics.AbstractImage.prototype.getSize= function(){
	return {'width':this.getWidth(), 'height':this.getHeight()};
};
Graphics.AbstractImage.prototype.getWidth= null;
Graphics.AbstractImage.prototype.getHeight= null;

Graphics.AbstractImage.prototype.copyTo= function(dest){
	for (var y=0; y<this.getHeight(); y++){
		for (var x=0; x<this.getWidth(); x++) {
			dest.set(x,y, this.get(x,y) );
		}
	}
};

Graphics.AbstractImage.prototype.get= null;
Graphics.AbstractImage.prototype.set= null;

