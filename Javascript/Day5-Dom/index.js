let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let arr_data = JSON.parse(localStorage.getItem("arr_data")) || [];
if (JSON.parse(localStorage.getItem("arr_data")) != null) {
  arr_data = JSON.parse(localStorage.getItem("arr_data"));
} else {
  arr_data = [];
}
let nam = document.getElementById("nam");
arr_data = [];
display(arr_data);
form.addEventListener("submit", getData);

function getData() {
  event.preventDefault();

  let nam = form.nam.value;
  localStorage.setItem("nam", nam);
  console.log(localStorage.setItem("nam", nam));
  let doc_id = form.doc_id.value;
  // console.log(doc_id)
  localStorage.setItem("doc_id", doc_id);
  console.log(localStorage.setItem("doc_id", doc_id));
  let spl = form.spl.value;
  localStorage.setItem("spl", spl);
  console.log(localStorage.setItem("spl", spl));
  let exp = form.exp.value;
  localStorage.setItem("exp", exp);
  console.log(localStorage.setItem("exp", exp));
  let mobile = form.mobile.value;
  localStorage.setItem("mobile", mobile);
  console.log(localStorage.setItem("mobile", mobile));
  let data_obj = {
    nam,
    doc_id,
    spl,
    exp,
    mobile,
  };
  //console.log(data_obj)
  arr_data.push(data_obj);
  localStorage.setItem("arr_data", JSON.stringify(arr_data));
  //  console.log(arr_data);
  display(arr_data);
}
function display(arr) {
  //  console.log(arr)
  tbody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("tr");
    let nam = document.createElement("td");
    nam.innerText = arr[i].nam;
    let doc_id = document.createElement("td");
    doc_id.innerText = arr[i].doc_id;
    let spl_id = document.createElement("td");
    spl_id.innerText = arr[i].spl;
    let exp_id = document.createElement("td");
    exp_id.innerText = arr[i].exp;
    let mobile = document.createElement("td");
    mobile.innerText = arr[i].mobile;
    let Role = document.createElement("td");
    Role.innerHTML = arr[i].Role;
    if (arr[i].exp >= 5) {
      Role.innerText = "Senior";
    } else if (arr[i].exp < 5 && arr[i].exp >= 2) {
      Role.innerText = "Junior";
    } else {
      Role.innerText = "Trainee";
    }

    let Del = document.createElement("td");
    Del.innertext = "Delete";
    Del.style.color = "blue";
    Del.style.backgroundColor = "Red";
    Del.addEventListener("click", function () {
      event.target.parentNode.remove();
    });

    row.append(nam, doc_id, spl_id, exp_id, mobile, Role, Del);
    tbody.append(row);
    //console.log(exp_id)
  }
}
