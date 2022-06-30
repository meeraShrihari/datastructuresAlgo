function Foo(x) {
	function bar() {
		return x;
	}
	this.baz= function() {
		return x;
	}
}
Foo.prototype.baz = function() {
	return x;
}

//
let y = new Foo();
console.log(y.baz())// equals ?
//y.bar() // equals ?