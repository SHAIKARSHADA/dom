let globalId;

function createChild(title, description, id) {
  const child = document.createElement("div");
  const grandchildOne = document.createElement("div");
  grandchildOne.innerHTML = title;
  const grandchildtwo = document.createElement("div");
  grandchildtwo.innerHTML = description;
  const grandchildthree = document.createElement("button");
  grandchildthree.innerHTML = "Mark as done";
  grandchildthree.setAttribute("onclick",`markAsDone(${globalId})`);
  child.appendChild(grandchildOne);
  child.appendChild(grandchildtwo);
  child.appendChild(grandchildthree);
  child.setAttribute("id",id);
  console.log(id);
  return child;
}

function addTodo() {
  
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const parent = document.getElementById("container");
  parent.appendChild(createChild(title,description,globalId++))
 
}

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done!";
}