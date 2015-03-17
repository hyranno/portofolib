Graphics.Color= function(r,g,b,a){
	this.r= r;
	this.g= g;
	this.b= b;
	this.a= a;
};

Graphics.Color.prototype.clone= function(){
	return new Graphics.Color(this.r, this.g, this.b, this.a);
};

Graphics.Color.prototype.distance= function(c){
	var tc=this.clone().minus(c).pow(2);
	return Math.sqrt(tc.r +tc.g +tc.b);
};

Graphics.Color.prototype.plus= function(c){
	if (c instanceof Graphics.Color) this.r+=c.r, this.g+=c.g, this.b+=c.b;
	else this.r+=c, this.g+=c, this.b+=c;
	return this;
};
Graphics.Color.prototype.minus= function(c){
	if (c instanceof Graphics.Color) this.r-=c.r, this.g-=c.g, this.b-=c.b;
	else this.r-=c, this.g-=c, this.b-=c;
	return this;
};
Graphics.Color.prototype.mul= function(c){
	if (c instanceof Graphics.Color) this.r*=c.r, this.g*=c.g, this.b*=c.b;
	else this.r*=c, this.g*=c, this.b*=c;
	return this;
};
Graphics.Color.prototype.div= function(c){
	if (c instanceof Graphics.Color) this.r/=c.r, this.g/=c.g, this.b/=c.b;
	else this.r/=c, this.g/=c, this.b/=c;
	return this;
};

Graphics.Color.prototype.pow= function(p){
	return this.opr(function(v){return Math.pow(v,p);});
};
Graphics.Color.prototype.abs= function(){
	return this.opr(Math.abs);
};
Graphics.Color.prototype.opr= function(f){
	this.r= f(this.r), this.g= f(this.g), this.b= f(this.b);
	return this;
};

Graphics.Color._FFFFFF = new Graphics.Color(0xFF,0xFF,0xFF,0xFF);
Graphics.Color._888888 = new Graphics.Color(0x88,0x88,0x88,0xFF);
Graphics.Color._000000 = new Graphics.Color(0,0,0,0xFF);
