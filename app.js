const editIconURL =
  "https://img.icons8.com/material-outlined/25/006400/pencil--v1.png";
const deleteIconURL = "https://img.icons8.com/pastel-glyph/25/8b0000/trash.png";
const addItemIcon = document.getElementById("addItemIcon");
const listContainer = document.getElementsByClassName("list-group");
const todoInput = document.querySelector("input[name='todoName']");
let editEl,
  todoItemSpan,
  todoItemText = "",
  todoListGroupItem,
  todoInputText,
  editIcon,
  deleteIcon,
  doneIcon,
  undoIcon;

const addSomeItems = () => {
  listContainer[0].innerText === ""
    ? (listContainer[0].innerHTML =
        "<h2 class='text-center text-muted'>Add some items !</h2>")
    : document.querySelector("h2") && document.querySelector("h2").remove();
};

addSomeItems();

const initActionsItems = () => {
  editIcon = document.createElement("img");
  editIcon.setAttribute("src", editIconURL);

  deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", deleteIconURL);
};

todoInput.addEventListener("keyup", (e) => {
  e.target.value.trim() === ""
    ? e.target.setAttribute("placeholder", "Enter a task name !")
    : e.keyCode === 13 && addTodoItemToDOM();
});

addItemIcon.addEventListener("click", (e) => {
  e.target.previousElementSibling.value.trim() === ""
    ? e.target.previousElementSibling.setAttribute(
        "placeholder",
        "Enter a task name !"
      )
    : addTodoItemToDOM();
});

const addTodoItemToDOM = () => {
  addSomeItems();
  todoListGroupItem = document.createElement("li");
  todoListGroupItem.className = "list-group-item";

  todoItemSpan = document.createElement("span");
  todoItemSpan.innerText = todoInput.value;

  todoListItemIconsSpan = document.createElement("span");
  todoListItemIconsSpan.className = "list-item--icons";

  initActionsItems();

  todoListItemIconsSpan.appendChild(editIcon);
  todoListItemIconsSpan.appendChild(deleteIcon);

  todoListGroupItem.appendChild(todoItemSpan);
  todoListGroupItem.appendChild(todoListItemIconsSpan);

  listContainer[0].appendChild(todoListGroupItem);

  editItem();

  deleteItem();

  completedItem();

  todoInput.value = "";
  todoInput.setAttribute("placeholder", "Add some more tasks");
};

const editItem = () => {
  editIcon.addEventListener("click", (e) => {
    editEl = e.target.parentNode.previousSibling;
    editEl.contentEditable = "true";
    editEl.focus();
    editEl.addEventListener(
      "keydown",
      (e) => e.keyCode === 13 && e.preventDefault()
    );
    editEl.addEventListener("blur", () => {
      editEl.contentEditable = "false";
    });
  });
};

const deleteItem = () => {
  deleteIcon.addEventListener("click", (e) => {
    el = e.target.parentNode.parentNode;
    el.remove();
    addSomeItems();
  });
};
