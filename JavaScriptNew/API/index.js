let main =document.getElementById("main")
let api="https://resta.onrender.com/categories";

 getData();
 async function getData(){
    try {
        let res= await fetch(api);
    //  console.log(res)
    let data=  await res.json()
    display(data)
     console.log( data)
    } catch (error) {
        console.log(error)
        
    }
}
function display(data){
    data.forEach(function(el){
        // console.log(el)

        let div=document.createElement("div")
        let name=document.createElement("h1")
        name.innerText=el.name
        let price=document.createElement("h2")
        price.innerText=el.price
        let img=document.createElement("img")
        img.src=el.img
        div.append(img,name,price)
        main.append(div)
    });

}