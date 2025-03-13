let form=document.querySelector("form")
let tbody=document.querySelector("tbody")
arr_data=[]
display(arr_data)
form.addEventListener("submit",getData)

function getData(){
    // alert("Hello")
event.preventDefault()
let name=form.name.value;
    //  console.log(name)
localStorage.setItem("name",name)
 console.log(localStorage.setItem("name",name))
let EmployeeId= form.EmployeeId.value;
    //console.log(EmployeeId)
localStorage.setItem("EmployeeId",EmployeeId)
console.log(localStorage.setItem("EmployeeId",EmployeeId))
let exp=form.exp.value;
    //  console.log(exp)
localStorage.setItem("exp",exp)
console.log(localStorage.setItem("exp",exp))
let Department=form.Department.value;
    //console.log(Department)
localStorage.setItem("Department",Department)
console.log(localStorage.setItem("Department",Department))
let mobile=form.mobile.value;
    //console.log(mobile)
localStorage.setItem("mobile",mobile)
console.log(localStorage.setItem("mobile",mobile))
let data_obj={
        name,
        EmployeeId,
        exp,
        Department,
        mobile
    }
    //console.log(data_obj)
    arr_data.push(data_obj)
    //console.log(arr_data)
    display(arr_data)
}
function display(arr){
    //console.log(arr)
tbody.innerHTML="";
for(let i=0;i<arr.length;i++){
    let row=document.createElement("tr")
    let name=document.createElement("td")
    name.innerText=arr[i].name
    //console.log(name)
    localStorage.getItem("name",name)
    console.log(localStorage.getItem("name",name))
    let EmployeeId=document.createElement("td")
    EmployeeId.innerText=arr[i].EmployeeId
    //console.log(EmployeeId)
    let exp=document.createElement("td")
    exp.innerHTML=arr[i].exp
    //console.log(exp)
    let Department=document.createElement("td")
    Department.innerHTML=arr[i].Department
    //console.log(Department)
    let mobile=document.createElement("td")
    mobile.innerHTML=arr[i].mobile
    //console.log(mobile)
    let Role=document.createElement("td")
    //role condition
     if(arr[i].exp>=5){
        Role.innerText="Senior";
     }
     else if(arr[i].exp<5 && arr[i].exp>=2){
         Role.innerText="Junior";
     }
     else{
         Role.innerText="Trainee";
     }
    let Del=document.createElement("td")
    Del.innerText="Delete";
    Del.style.color="White";
    Del.style.backgroundColor="Red";
    Del.addEventListener("click",function(){
        event.target.parentNode.remove();
    })

    row.append(name,EmployeeId,Department,exp,mobile,Role,Del)
    tbody.append(row)

}
}
