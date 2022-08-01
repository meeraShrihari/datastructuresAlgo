const data = {
    Parent: {
        Child1: "Child 1",
        Child2: {Child21: "Child 21", Child22: "Child 22"},
        Child3: [
            "Child 31",
            "Child 32",
            { Child33: "Sub Child" },
            { Child4: ["Child 41", "Child 42", { Child43: "Sub Child" }] },
          ]
    }
}

let markupArray = ['<ul>'];
/*
<ul>
    <li><a>Parent</a>
        <ul>
            <li><a>Child1</a>
                <ul>
                    <li><a>Child 1</a></li>
                    <li><a>Child2</a>
                        <ul>

*/
const getItems = (items) => {
    for(const item in items) {
        markupArray.push(`<li><a>${item}</a><ul>`);
        createList(items[item]);
        markupArray.push('</li></ul>');
    }
}

const createList = (items) => {
    if(Array.isArray(items)) {
        items.forEach(item => createList(item));
    } else {
        switch(typeof(items)) {
            case "object":
                getItems(items);
                break;
            case "string":
                markupArray.push(`<li><a>${items}</a></li>`);
                break;
        }
    }
};

const list = document.getElementById('list');
createList(data);
markupArray.push('</ul>');
list.innerHTML = markupArray.join('');