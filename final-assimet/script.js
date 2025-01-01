// Static product data (no API needed)
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    loader.style.display = "none"; 
});

const mockData = {
    data: [
        { id: 1, image: "images/image.jpg", category: "Gymnastic", title: "Parallel Bars", brand: "Nike", price: "$129" },
        { id: 2, image: "images/racket.webp", category: "Tennis", title: "Tennis Racket", brand: "Wilson", price: "$89" },
        { id: 3, image: "images/helmet.jpg", category: "Calisthenic", title: "Helmet", brand: "Lululemon", price: "$39" },
        { id: 4, image: "images/download.jpg", category: "Gymnastic", title: "Dumbbells (Pair)", brand: "Rogue", price: "$69" },
        { id: 5, image: "images/download2.png", category: "Calisthenic", title: "Pull-Up Bar", brand: "Adidas", price: "$99" },
    ]
};

// Function to render product data on the page
let renderData = (data) => {
    const main_items_container = document.querySelector("#main_items");
    main_items_container.innerHTML = ""; // Clear previous items

    data.data.forEach(item => {
        let item_container = document.createElement("div");
        item_container.setAttribute("class", "item card");

        let img = document.createElement("img");
        img.setAttribute("src", item.image);

        let category = document.createElement("p");
        category.innerText = item.category;

        let title = document.createElement("p");
        title.innerText = item.title;

        let brand = document.createElement("p");
        brand.innerText = item.brand;

        let price = document.createElement("h4");
        price.innerText = item.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.setAttribute("class", "add-to-cart");

        btn.addEventListener("click", () => {
            let cart_items = JSON.parse(localStorage.getItem("cart")) || [];
            cart_items.push(item); // Add the item to the cart
            localStorage.setItem("cart", JSON.stringify(cart_items)); // Store the updated cart in localStorage
            counter(); // Update cart count in the navbar
            window.alert(`${item.title} is added to cart`); // Alert the user
        });

        item_container.append(img, category, title, brand, price, btn);
        main_items_container.append(item_container);
    });
};

// Function to update the cart count in the navbar
let counter = () => {
    let cart_count_container = document.querySelector("#cart_count");
    cart_count_container.innerText = JSON.parse(localStorage.getItem("cart"))?.length || 0;
};

// Function to filter products by category
const filterProducts = (category) => {
    if (category === "All") {
        renderData(mockData); // Render all products
    } else {
        const filteredData = { data: mockData.data.filter(item => item.category === category) };
        renderData(filteredData); // Render filtered products
    }
};

// Event listeners for filter buttons
document.getElementById("show-all").addEventListener("click", () => filterProducts("All"));
document.getElementById("gymnastic-btn").addEventListener("click", () => filterProducts("Gymnastic"));
document.getElementById("calisthenic-btn").addEventListener("click", () => filterProducts("Calisthenic"));

// Initial render
renderData(mockData);
counter();
