let cartArray = JSON.parse(localStorage.getItem("cart"));
console.log(cartArray);

const cartList = document.getElementById("cart-list");
cartArray.forEach(function (product) {
    let createTemp = `<p>${product}</p>`;
    cartList.insertAdjacentHTML("beforeend", createTemp);
});

const removeElement = document.getElementById("remove");
removeElement.addEventListener("click", function () {
    localStorage.removeItem("cart");
    location.reload();
});
