const car1 = {
    brand: 'Porsche',
    getCarDesc: function(cost, year, color) {
        console.log(`
        This car is a ${this.brand}. 
        The price is $${cost}. The year is ${year}. 
        The color is ${color}. \n`);
    }
};

const car2 = {
    brand: 'Lamborghini'
}

const car3 = {
    brand: 'Ford'
}

car1.getCarDesc(80000, 2010, 'blue');

car1.getCarDesc.call(car2, 200000, 2013, 'yellow');

car1.getCarDesc.apply(car3, [35000, 2012, 'black']);
