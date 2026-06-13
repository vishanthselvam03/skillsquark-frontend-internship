const products = [
    {name: "Laptop", category: "Electronics"},
    {name: "Phone", category: "Electronics"},
    {name: "Shirt", category: "Fashion"}
];

function showElectronics() {

    let result =
    products.filter(
        item => item.category === "Electronics"
    );

    let list =
    document.getElementById("products");

    list.innerHTML = "";

    result.forEach(item => {
        list.innerHTML +=
        `<li>${item.name}</li>`;
    });
}