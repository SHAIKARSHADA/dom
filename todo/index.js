
function createChild(title, description, id) {
  const child = document.createElement("div");
  const grandchildOne = document.createElement("div");
  grandchildOne.innerHTML = title;
  const grandchildtwo = document.createElement("div");
  grandchildtwo.innerHTML = description;
  const grandchildthree = document.createElement("button");
  grandchildthree.innerHTML = "Mark as done";
  grandchildthree.setAttribute("onclick",`markAsDone(${id})`);
  child.appendChild(grandchildOne);
  child.appendChild(grandchildtwo);
  child.appendChild(grandchildthree);
  child.setAttribute("id",id);
  console.log(id);
  return child;
}


function updateDomAccToState(state) {
  const parent = document.getElementById("container");
  parent.innerHTML = "";
  for(let i = 0; i<state.length; i++) {
    const child = createChild(state[i].title, state[i].description, state[i].id);
    parent.appendChild(child);
  }
}

// updateDomAccToState([{
//   title: "go to gym",
//   description: "go to gym from 5-7",
//   id: 1,
// },{
// title: "go to gym",
// description: "go to gym from 5-7",
// id: 1,
// }])

window.setInterval(async function() {
  const res = await fetch("https://sum-server.100xdevs.com/todos")
  const json = await res.json();
  updateDomAccToState(json.todos)
},5000)