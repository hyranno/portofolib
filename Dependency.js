/*USAGE
//load jQuery
//load Dependency.js
var deps= new Dependency("js/lib/hoge/");
deps.require("namespaces.js");
deps.require("hoge.js");
*/

function Dependency(root){
	this.root = root;
	this.loaded = {};
	return this;
}
Dependency.prototype.require = function(path){
	if(!this.loaded[path]){
		this.loaded[path] = $.ajax({url:(this.root+path),async:false});
		globalEval(this.loaded[path].responseText);
	}
};
function globalEval(str){
	eval(str);
}

/*from node.js*/
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
