let card=document.querySelector(".card");

fetch("https://fakestoreapi.com/products")
.then((data)=>{
  return data.json();
})
.then((completedata) => {
    let detail=" ";
    completedata.map((value) => {
        detail+=`<div class="card">
        <div class=container>
        <div class="product-image">
        <img src="${value.image}" alt="">
       </div>
       <div class="card-details">
         <h3>${value.title}</h3>
         <div class="price">
            <p>$${value.price}</p>
            <i class="ri-add-circle-fill"></i>
         </div>
       </div>
       </div>
    </div>`
    })
card.innerHTML=detail;
}).catch((err) => {
    console.log(err);
  });

const productName=document.getElementById("productName");
const price=document.getElementById("price");
const description=document.getElementById("description");
const myDropdown=document.getElementById("myDropdown");
const image=document.getElementById("image");
let addnewproduct=document.querySelector(".form");

addnewproduct.addEventListener("submit",(e)=>{
  e.preventDefault();
  let newProduct ={
    title:productName.value,
    price:price.value,
    description:description.value,
    image:image.value,
    category:myDropdown.value
  };
  fetch("https://fakestoreapi.com/products",{
    method:"POST",
    body:JSON.stringify(newProduct),
    headers:{
      "Content-type":"application/json"
    }
  }).then(res=>res.json())
  .then(data => {console.log("Product added:",data)
    alert("Product added successfully!")
  })
  .catch(err => {console.error("error:",err)
    alert("Failed to add product.")
  })
})