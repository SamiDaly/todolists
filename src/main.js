import "./style.css";

class toDoList {
  constructor(names) {
    this.names = names;
    this.done = false;
  }
}
const list1 = new toDoList("javascript todo list");
const list2 = new toDoList("HTML basic structur");
const list3 = new toDoList("css styling on to do list");
const list4 = new toDoList("create a class");
const list5 = new toDoList("create a list");
const list6 = new toDoList("create an object");

//list------------------

const usersList = [list1, list2, list3, list4, list5, list6];

//get element------------------
const input = document.getElementById("textFromUser");
const button = document.getElementById("btn");
const ulLi = document.getElementById("list");

//loop-----------------
function loopFunc() {
  for (let i = 0; i < usersList.length; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "check";
    input.name = "checkbox";
    input.value = "value";

    input.addEventListener("click", () => {
      if ((li.style.display = "none"));
    });
    li.appendChild(input);

    const span = document.createElement("span");
    span.classList = "spanClass";
    span.id = "spanId";
    span.innerHTML = usersList[i].names;
    li.appendChild(span);

    //--line-through
    span.addEventListener("click", (event) => {
      usersList[i].done = true;

      if ((event.target.style.textDecoration = "line-through"));
    });

    //-delete-line-through dblclick
    span.addEventListener("dblclick", (event) => {
      usersList[i].done = true;
      if ((event.target.style.textDecoration = "none"));
    });

    li.classList = "linkClass";
    li.id = "linkId";
    li.style.color = "white";
    li.style.margin = "20px";

    ulLi.appendChild(li);
  }
}

loopFunc();

//add from user input
button.addEventListener("click", () => {
  const textvalue = input.value.trim();
  if (textvalue === "") return;
  //create new el
  const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = "check";
  check.name = "checkbox";

  const span = document.createElement("span");
  span.classList = "spanClass";
  span.id = "spanId";
  span.textContent = textvalue;

  li.appendChild(check);
  li.appendChild(span);

  // --- line-through vid klick
  span.addEventListener("click", (event) => {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  });
  //remove
  check.addEventListener("click", () => {
    li.remove();
  });
  // some style
  li.classList = "linkClass";
  li.id = "linkId";
  li.style.color = "white";
  li.style.margin = "20px";

  ulLi.appendChild(li);
  //--clear
  input.value = "";
});
