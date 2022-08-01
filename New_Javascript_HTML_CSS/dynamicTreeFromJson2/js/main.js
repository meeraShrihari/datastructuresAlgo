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

const data = {
  Parent: {
    img: "father.png",
    name: "Jan Doe",
    age: "50",
    children: [
      {
        child: {
          img: "child_1.png",
          name: "child 1",
          age: "25",
        },
      },
      {
        child: {
          img: "child_2.png",
          name: "child 2",
          age: "22",
          children: [
            {
              grandChild: {
                img: "child_3.png",
                name: "grand child 1",
                age: "12",
              },
            },
          ],
        },
      },
      {
        child: {
          img: "child_4.png",
          name: "child 3",
          age: "16",
          children: [
            {
              grandChild: {
                img: "child_5.png",
                name: "grand child 1",
                age: "18",
                children: [
                  {
                    grandgrandChild: {
                      img: "child_6.png",
                      name: "great grand child 1",
                      age: "13",
                    },
                  },
                  {
                    grandgrandChild: {
                      img: "child_7.png",
                      name: "great grand child 2",
                      age: "10",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

let markupArray = ['<ul>']

const createList = (items) => {
    switch(typeof(items)) {
        case "object":
            getItems(items);
            break;
    }
}

const getItems = (items) => {
    for(const item in items) {
        markupArray.push(`<li>${item}`);
        let details = items[item];
        getDetails(details);
        markupArray.push('</li>')
    }
}

const getDetails = (details) => {
  for(const detail in details) {
    if(detail === "img") {
      markupArray.push(
        `<img src="./img/${details[detail]}" alt="${details[detail]}"/>`
      )
    } else if(detail === "children") {
      markupArray.push("<ul>");
      details[detail].forEach((element) => {
        getItems(element);
      });
      markupArray.push("</ul>");
    }else {
      markupArray.push(`<span>${details[detail]}</span>`);
    }
  }
}
createList(data);
markupArray.push("</ul>");
list.innerHTML = markupArray.join("");
console.log(markupArray.join(""))
