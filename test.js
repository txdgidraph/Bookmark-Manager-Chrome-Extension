let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
//localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLead));
  renderLeads();
  //myLead.pop();
  inputEl.value = null;
});

function renderLeads() {
  // let listItems = "";
  // for (let item = 0; item < myLead.length; item++) {
  //   listItems = myLead[item];
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");
  //   a.textContent += listItems;
  //   li.append(a);
  //   a.href = myLead[item];
  //   a.target = "_blank"
  //   ulEl.append(li);
  //   myLead.pop();
  // }

  // ====Test Code --1====
  let lastItem = myLead[myLead.length - 1];
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = lastItem;
  a.textContent += lastItem;
  li.append(a);
  ulEl.append(li);
  console.log(JSON.parse(localStorage.getItem("myLeads")));
  // ====Test Code --1====
}
