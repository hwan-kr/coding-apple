let products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
];

const cardGroup = document.querySelector(".card");

function renderProducts(productsToRender) {
    cardGroup.innerHTML = ""; // Clear existing products
    productsToRender.forEach(function (item) {
        let template = `<div class="col-sm-4">
                         <img src="https://via.placeholder.com/600" class="w-100 my-2" />
                        <h5>${item.title}</h5>
                        <p>가격 : ${item.price}</p>
                        <button class = 'buy my-2'>구매</button>
                    </div>`;
        cardGroup.insertAdjacentHTML("beforeend", template);
    });
    addBuyEventListeners();
}

function addBuyEventListeners() {
    document.querySelectorAll(".buy").forEach((element) => {
        element.removeEventListener("click", handleBuyClick); // Remove previous event listener to avoid duplicate
        element.addEventListener("click", handleBuyClick);
    });
}

function handleBuyClick(event) {
    const productName =
        event.target.previousElementSibling.previousElementSibling.textContent;
    console.log("구매된 상품:", productName);
    updateCart(productName);
}

// 특정 조건으로 객체를 찾는 함수 정의
function findIndexByName(productName) {
    return products.findIndex(function (product) {
        return product.title == title; // name 속성이 주어진 값과 일치하는지 확인
    });
}

function updateCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productIndex = findIndexByName(productName);
    let count = 1;
    if (
        cart.forEach(function (item, index) {
            item.title == productName;
        })
    ) {
        console.log(productIndex);
        cart[productIndex].count = count + 1;
        cart.console.log("이미 있음");
    } else {
        cart.push({ title: `${productName}`, num: `${count}` });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("카트 업데이트:", cart);
}

// Initial render
renderProducts(products);

const moreBtnElement = document.getElementById("more");
moreBtnElement.addEventListener("click", function () {
    fetch("https://codingapple1.github.io/js/more1.json")
        .then((res) => res.json())
        .then(function (data) {
            products = products.concat(data);
            renderProducts(products);
        });
});

const priceElement = document.getElementById("price");
priceElement.addEventListener("click", function () {
    products.sort((a, b) => a.price - b.price);
    renderProducts(products);
});

const reverseElement = document.getElementById("reverse");
reverseElement.addEventListener("click", function () {
    products.sort((a, b) => (a.title < b.title ? -1 : 1));
    renderProducts(products);
});

const milionElement = document.getElementById("milion");
milionElement.addEventListener("click", function () {
    const filteredProducts = products.filter((a) => a.price <= 60000);
    renderProducts(filteredProducts);
});

const removeElement = document.getElementById("remove");
removeElement.addEventListener("click", function () {
    localStorage.removeItem("cart");
    location.reload();
});
