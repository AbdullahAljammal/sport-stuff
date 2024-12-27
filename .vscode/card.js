let cart_items = JSON.parse(localStorage.getItem("cart")) || []

let counter = () => {

    let cart_number = JSON.parse(localStorage.getItem("cart"))?.length || 0

    document.querySelector("#cart_count").innerText = cart_numb

}



counter()

cart_items.map((item, index) => {

    let cart_container = document.createElement("div");

    cart_container.setAttribute("class", "item")

    let img = document.createElement("img")

    img.setAttribute("src", item.image)

    let category = document.createElement("p")
    category.innerText = item.category;



    let title = document.createElement("h3")
    title.innerText = item.title

    let brand = document.createElement("p")
    brand.innerText = item.brand

    let price = document.createElement("h4")
    price.innerText = item.price

    let btn = document.createElement("button")

    btn.setAttribute("class", "remove")

    btn.addEventListener("click", () => {

        console.log("click")
        
        cart_items= cart_items.filter((item,ind_no)=> {
        
        return ind_no !== index})
        
        localStorage.setItem("cart", JSON.stringify (cart_items))
        
        counter()
        
        window.location.reload()
    })
    card_container.append(img,category,titlebrand,price,btn);
    document.querySelector("#items").append(cart_container);
})
document.querySelector("#checkout").addEventListener("click", () => {

    let name=document.querySelector("#name");
    
    let address=document.querySelector("#address")
    
    if(name.value!=="" && address.value !=""){
    
    window.alert('${name.value}, your order is successful')
    }
    })