deps.require("List/GeneralList.js");

List.ResampledList= function(data,step,offset){
	if (!List.GeneralList.call(this)) return false;
	this.data=data;
	this.step=step;
	this.offset=offset;
	return this;
};
inherits(List.ResampledList, List.GeneralList);

List.ResampledList.prototype.size = function(){return this.data.size()/this.step;};//ignoring offset
List.ResampledList.prototype.index = function(i){return i*step+offset;};
