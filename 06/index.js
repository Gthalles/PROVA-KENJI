const invoice = new Invoice();

function insertProduct () {
    const name = document.getElementById("name");
    const quantify = document.getElementById("quantify");
    const value = document.getElementById("value");

    invoice.insertProduct(name.value, Number(quantify.value), Number(value.value));
}

function getProducts () {
    let productList;
    const result = document.getElementById("result");

    invoice.getData().map(product => {
        productList += `<li>${product.name}: ${product.quantify * product.value}</li><br>`;
    });

    result.innerHTML = productList;
}

