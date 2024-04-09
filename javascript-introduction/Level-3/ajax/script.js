let products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
];

const cardGroup = document.querySelector(".card");

for (let i = 0; i < products.length; i++) {
    let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
    </div>`;
    cardGroup.insertAdjacentHTML("beforeend", template);
}

const moreBtnElement = document.getElementById("more");

moreBtnElement.addEventListener("click", function () {
    fetch("https://codingapple1.github.io/js/more1.json")
        .then((res) => res.json())
        .then(function (data) {
            console.log(data);
            data.forEach(function (item, i) {
                let template = `<div class="col-sm-4">
                     <img src="https://via.placeholder.com/600" class="w-100" />
                    <h5>${data[i].title}</h5>
                    <p>가격 : ${data[i].price}</p>
                </div>`;
                cardGroup.insertAdjacentHTML("beforeend", template);
            });
        });
});
