List.GeneralList= function(){
	this.data=null;
	return this;
};

List.GeneralList.prototype.get = function(i){return this.data.get(this.index(i));};
List.GeneralList.prototype.set = function(i,v){this.data.set(this.index(i),v);};
List.GeneralList.prototype.size = function(){return this.data.size();};

List.GeneralList.prototype.index = function(i){return i};//for Overload to remap
