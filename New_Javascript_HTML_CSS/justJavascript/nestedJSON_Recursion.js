let data = [
    {
        "name": "Nazmus",
        "job": "Software Engineer",
        "location": {
            "city": "Boston",
            "state": "Massachusetts"
        }
    },
    {
        "name": "Bill",
        "job": "CEO",
        "city": "Seattle",
        "state": "Washington"
    },
    {
        "name": "Bob",
        "job": "Engineer",
        "location": {
            "state": "New York",
            "city": "New York City",
            "zip": "11323"
        }
    }
];

function iterateObject(obj) {
    for(prop in obj) {
        if(typeof(obj[prop]) === "object") {
            iterateObject(obj[prop]);
        } else if(prop === "name" || prop === "city") {
            console.log(prop.toUpperCase() + ':' + obj[prop]);
        }
    }

}

data.map(item => {
    iterateObject(item);
});