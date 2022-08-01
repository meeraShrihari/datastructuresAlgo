/*
<ul>
  <li>Parent
    <ul>
      <li> <span> Child </span> </li>
    </ul>
  </li>
</ul>
*/

const list = document.getElementById('list');

// const data = {
//     Parent: 'Child'
// }

// const data = {
//     Parent: ["Child 1", "Child 2", {Child3:'Sub Child'}],
// }

const data = {
    Parent: {
      Child1: "Child 1",
      Child2: {Child21: "Child 21", Child22: "Child 22"},
      Child3: [
        "Child 31",
        "Child 32",
        { Child33: "Sub Child" },
        { Child4: ["Child 41", "Child 42", { Child43: "Sub Child" }] },
      ],
    },
  };

let markupArray = ['<ul>']

const createList = (items) => {
    if(Array.isArray(items)) {
        console.log("Array");
        items.forEach((item) => {
            createList(item);
        });
    } else {
        switch(typeof(items)) {
            case "object":
                console.log("Object");
                getItems(items);
                break;
            case "string":
                console.log("String");
                markupArray.push(`<li><span>${items}</span></li>`);
                break;
        }
    }
}

const getItems = (items) => {
    for(const item in items) {
        markupArray.push(`<li><a>${item}</a><ul>`);
        console.log(items[item]);
        createList(items[item]);
        markupArray.push('</ul></li>')
    }
}

createList(data);
markupArray.push("</ul>");
list.innerHTML = markupArray.join("");
