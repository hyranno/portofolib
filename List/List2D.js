List.List2D= function(width,height,data){
	this.width=width;
	this.height=height;
	this.data=data;
	return this;
};

List.List2D.prototype.getHeight = function(){return this.height;};
List.List2D.prototype.getWidth = function(){return this.width;};

List.List2D.prototype.get = function(x,y){
	return this.data.get(this.y(y)*this.getWidth()+this.x(x));
};
List.List2D.prototype.set = function(x,y,v){
	this.data.set(this.y(y)*this.getWidth()+this.x(x), v);
};

List.List2D.prototype.x = function(x){return x;};
List.List2D.prototype.y = function(y){return y;};
