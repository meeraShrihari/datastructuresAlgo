function makeItem() {
    return {
        data: {
            item: {
                names: 'Shoes',
                size: {
                    US: 10,
                    EU: 44
                }
            }
        },
        statuss: 'live'
    }
}

const {data: {item: {names, size: {US, EU}}}, statuss} = makeItem();
console.log(`${names}, ${US}, ${EU}, ${statuss}`);

function makeArrayOfItems() {
    return {
        data2: {
            items2: [
                { names2: 'Shoes', price: 100 },
                { names2: 'Shirt', price: 250 }
            ]
        },
        statuss2: 'live'
    }
}

const {data2: {items2: [item1, item2]}, statuss2} = makeArrayOfItems();
console.log(`${item1.names2}, ${item1.price}, ${item2.names2}, ${item2.price}, ${statuss2}`);