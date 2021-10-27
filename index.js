let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  renderLeads();
  myLead.pop();
  inputEl.value = null;
});

function renderLeads() {
  let listItems = "";
  for (let item = 0; item < myLead.length; item++) {
    listItems = myLead[item];
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent += listItems;
    li.append(a);
    a.href = myLead[item];
    a.target = "_blank"
    ulEl.append(li);
  }
}