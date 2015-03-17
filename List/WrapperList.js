deps.require("List/GeneralList.js");

List.WrapperList= function(array){
	if (!List.GeneralList.call(this)) return false;
	this.array=array;
	return this;
};
inherits(List.WrapperList, List.GeneralList);

List.WrapperList.prototype.get = function(i){return this.array[i];};
List.WrapperList.prototype.set = function(i,v){this.array[i]=v;};
List.WrapperList.prototype.size = function(){return this.array.length;};

