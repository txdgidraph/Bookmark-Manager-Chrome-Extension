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
      if (inputEl.value !== "") {
        myLeads.push(inputEl.value);
        console.log(myLeads);
        renderLeads();
      } else {
        window.prompt("NO LEAD ENTERED");
      }
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
  if (localStorage.getItem("Leads") === null) {
    localStorage.setItem("Leads", JSON.stringify(myLeads));
  } else {
    let storedLeads = JSON.parse(localStorage.getItem("Leads"));
    let arrayOne = myLeads.concat(storedLeads);
    let arrayTwo = arrayOne.filter(
      (item, pos) => arrayOne.indexOf(item) === pos
    );
    console.log(arrayTwo);
    localStorage.setItem("Leads", JSON.stringify(arrayTwo));
  }
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
    renderLeads();
  });
}
function defaultLead() {
  if (localStorage.getItem("Leads") === null) {
    localStorage.setItem("Leads", "ByMattaOrigin");
  } else {
    console.log("Data exists");
  }
}
