let page = 1;

// gettting the data from a API

const fetchApi = async (page = 1) => {

    try {

        let data = await fetch('https://dbioz2kee.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&pages=${page}')

        data = await data.json()

        RenderData(data)

    } catch (erгor) {

        console.log(error)

    }

}

fetchApi()

// cart counter function

let counter = () => {

    let cart_count_container = document.querySelector("#cart_count");

    cart_count_container.innerText = JSONN.parse(localStorage.getItem("cart"))?.length || 0

}
counter()

// Render api data

let RenderData = (data) => {

    const main_items_container = document.querySelector("#main_items");

    main_items_container.innerHTML = ""

    if (page == 1) {

        document.querySelector("#previous").disabled = true

    } else {

        document.querySelector("#previous").disabled = false

    }

    if (page == data.totalPages) {

        document.querySelector("#next").disabled = true

    } else {

        document.querySelector("#next").disabled = false

    }

    data.data.map(item => {

        let item_container = document.createElement("div")
        item_container.setAttribute("class", "item")

        let img = document.createElement("img")
        img.setAttribute("src", item.image)



        let category = document.createElement("p")
        category.innerText = item.category;

        let title = document.createElement("p");
        title.innerText = item.title;

        let brand = document.createElement("p");
        brand.innerText = item.brand;

        let price = document.createElement("h4");
        price.innerText = item.price;

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart";
        btn.setAttribute("class", "add to cart")
        btn.addEventListener("click", () => {

            let carts_items = JSON.parse(localStorage.getItem("cart")) || []

            carts_items.push(item)

            localStorage.setItem("cart", JSON.stringify(carts_items));

            counter()

            window.alert('${item.title), is added to cart')

        })
        item - item_container.append(img, category, title, brand, price, btn)
        main_items_container.append(item_container)
    })
}
document.querySelector("#previous").addEventListener("click", () => {

    page--

    fetchApi(page)

})

document.querySelector("#next").addEventListener("click", () => {

    page++

    fetchApi(page)

})
