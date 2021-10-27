let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  renderLeads();
  myLead.pop();
  inputEl.value=null;
});

function renderLeads() {
  let listItems = "";
  for (let item = 0; item < myLead.length; item++) {
    listItems = myLead[item];
    const li = document.createElement("li");
    li.textContent += listItems;
    ulEl.append(li);
  }
}
