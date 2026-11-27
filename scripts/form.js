// Product array provided in the assignment
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Select the product dropdown
const productSelect = document.querySelector("#product");

// Dynamically create product options
products.forEach((product) => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
});

// Footer date information
const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;