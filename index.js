let myLeads = [];
let inputEl = document.querySelector("#get-input");
let ulElementOne = document.querySelector("#ulOne-el");
let ulElementTwo = document.querySelector("#ulTwo-el");
let pElement = document.querySelector("#p-el");

document.querySelector("#saveTab-btn").addEventListener("click", function () {
  saveCurrentTab();
});

document.querySelector("#showLeads-btn").addEventListener("click", function () {
  getFromLocalStorage();
});

document
  .querySelector("#get-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      renderLeads();
    } else {
      //
    }
  });
document.querySelector("#save-btn").addEventListener("click", function () {
  if (inputEl.value !== "") {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
  } else {
    window.prompt("NO LEAD ENTERED");
    
  }
});

function renderLeads() {
  const lastValue = myLeads[myLeads.length - 1];
  const a = document.createElement("a");
  a.textContent += lastValue;
  a.href = lastValue;
  a.target = "_blank";
  const li = document.createElement("li");
  li.append(a);
  ulElementOne.append(li);
  inputEl.value = null;
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("Leads", JSON.stringify(myLeads));
}

function getFromLocalStorage() {
  let storedContents = JSON.parse(localStorage.getItem("Leads"));
  if (storedContents) {
    for (let i = 0; i < storedContents.length; i++) {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.textContent += storedContents[i];
      a.href = storedContents[i];
      a.target = "_blank";
      li.append(a);
      ulElementTwo.append(li);
    }
  } else {
    window.prompt("Hey, There are No Saved Leads");
  }
}

function saveCurrentTab() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //ulElementTwo.textContent += tabs[0].url;
    myLeads.push(tabs[0].url);
    renderLeads()
  });
}
