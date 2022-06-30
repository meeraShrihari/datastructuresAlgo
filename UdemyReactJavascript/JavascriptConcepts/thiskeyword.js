this.color = 'red';
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log('this in logColor : '+ this);
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log('this in IIFE : '+ this);
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
}

console.log('Global : this.color: '+this.color);
myCar.logColor();