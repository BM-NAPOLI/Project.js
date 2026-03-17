let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let total = document.getElementById("total");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let creat = document.getElementById("create-btn");
let deleteAll = document.getElementById("delete-all");

let mode = "create";
let j;

//! Calcul The Price
function getPrice() {
    if (price.value != "") {
        let result = +price.value + +taxes.value + +ads.value - +discount.value;
        total.innerHTML = "Total: " + result.toFixed(2);
        total.style.background = "#03dac6";
    } else {
        total.innerHTML = "";
        total.style.background = "#ff3b3b";
    }
}

//! Save Data
let dataPro;

if (localStorage.Prodact != null) {
    dataPro = JSON.parse(localStorage.Prodact);
} else {
    dataPro = [];
}

creat.onclick = function () {

    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: (+price.value + +taxes.value + +ads.value - +discount.value).toFixed(2),
        category: category.value.toLowerCase(),
        count: count.value,
    };
    if (title.value !== '' &&
        price.value !== '' &&
        category.value !== '' &&
    Number(count.value) < 100
    ) {

        if (mode === "create") {

            if (newPro.count > 1) {

                for (let i = 0; i < newPro.count; i++) {
                dataPro.push(newPro);
                }

            } else {

                dataPro.push(newPro);

            }

        } else {

            dataPro[j] = newPro;
            mode = "create";
            creat.innerHTML = "Create";
            count.style.display = "block";

    }

    clearData();

}

    localStorage.Prodact = JSON.stringify(dataPro);

    showData();
    getPrice();

    scroll({
        top: 0,
        behavior: "smooth"
    });

};

//! Clear Inputs
function clearData() {

    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    category.value = "";
    count.value = "";

}

//! Show Data
function showData() {

    let table = "";
    let cards = "";

    for (let i = 0; i < dataPro.length; i++) {

        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>Total: ${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td>${dataPro[i].count}</td>
            <td>
                <button class="update-btn" onclick="updaData(${i})">Update</button>
                <button class="delete-btn" onclick="deletData(${i})">Delete</button>
            </td>
        </tr>`;

        cards += `
        <div class="card">
            <div class="card-title">${dataPro[i].title}</div>
            <p><strong>Price:</strong> ${dataPro[i].price}</p>
            <p><strong>Taxes:</strong> ${dataPro[i].taxes}</p>
            <p><strong>Ads:</strong> ${dataPro[i].ads}</p>
            <p><strong>Discount:</strong> ${dataPro[i].discount}</p>
            <p><strong>Total:</strong> ${dataPro[i].total}</p>
            <p><strong>Category:</strong> ${dataPro[i].category}</p>
            <p><strong>Count:</strong> ${dataPro[i].count}</p>
            <button class="update-btn" onclick="updaData(${i})">Update</button>
            <button class="delete-btn" onclick="deletData(${i})">Delete</button>
        </div>`;

    }

    document.getElementById("tbody").innerHTML = table;
    document.getElementById("cards").innerHTML = cards;

    if (dataPro.length > 0) {

        deleteAll.innerHTML = `Delete All (${dataPro.length})`;
        deleteAll.style.display = "block";

    } else {

        deleteAll.style.display = "none";

    }

}

showData();

//! Delete One
function deletData(i) {

    dataPro.splice(i, 1);
    localStorage.Prodact = JSON.stringify(dataPro);
    showData();

}

//! Delete All
function deletAll() {

    dataPro = [];
    localStorage.Prodact = JSON.stringify(dataPro);
    showData();

}

deleteAll.onclick = deletAll;

//! Update
function updaData(i) {

    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;

    getPrice();

    count.style.display = "none";

    creat.innerHTML = "Update";
    mode = "update";
    j = i;
        scrollTo({
        top:0,
        behavior:"smooth",
    })

}

//! Search
let searchMode = "title";

function searchModeData(id) {

    let search = document.getElementById("search");

    if (id === "search-title") {

        searchMode = "title";
        // search.placeholder = "Search By Title";

    } else {

        searchMode = "category";
        // search.placeholder = "Search By Category";

    }
        search.placeholder = "Search By "+searchMode;

    search.focus();
    search.value = "";
    searchData("");

}

//! Search Function
function searchData(value) {

    let table = "";
    let cards = "";

    for (let i = 0; i < dataPro.length; i++) {

        if (searchMode === "title") {

            if (dataPro[i].title.includes(value.toLowerCase())) {

                table += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>Total: ${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td>${dataPro[i].count}</td>
                    <td>
                        <button class="update-btn" onclick="updaData(${i})">Update</button>
                        <button class="delete-btn" onclick="deletData(${i})">Delete</button>
                    </td>
                </tr>`;

                cards += `
                <div class="card">
                    <div class="card-title">${dataPro[i].title}</div>
                    <p><strong>Price:</strong> ${dataPro[i].price}</p>
                    <p><strong>Taxes:</strong> ${dataPro[i].taxes}</p>
                    <p><strong>Ads:</strong> ${dataPro[i].ads}</p>
                    <p><strong>Discount:</strong> ${dataPro[i].discount}</p>
                    <p><strong>Total:</strong> ${dataPro[i].total}</p>
                    <p><strong>Category:</strong> ${dataPro[i].category}</p>
                    <p><strong>Count:</strong> ${dataPro[i].count}</p>
                    <button class="update-btn" onclick="updaData(${i})">Update</button>
                    <button class="delete-btn" onclick="deletData(${i})">Delete</button>
                </div>`;

            }

        } else {

            if (dataPro[i].category.includes(value.toLowerCase())) {

                table += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>Total: ${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td>${dataPro[i].count}</td>
                    <td>
                        <button class="update-btn" onclick="updaData(${i})">Update</button>
                        <button class="delete-btn" onclick="deletData(${i})">Delete</button>
                    </td>
                </tr>`;

                cards += `
                <div class="card">
                    <div class="card-title">${dataPro[i].title}</div>
                    <p><strong>Price:</strong> ${dataPro[i].price}</p>
                    <p><strong>Taxes:</strong> ${dataPro[i].taxes}</p>
                    <p><strong>Ads:</strong> ${dataPro[i].ads}</p>
                    <p><strong>Discount:</strong> ${dataPro[i].discount}</p>
                    <p><strong>Total:</strong> ${dataPro[i].total}</p>
                    <p><strong>Category:</strong> ${dataPro[i].category}</p>
                    <p><strong>Count:</strong> ${dataPro[i].count}</p>
                    <button class="update-btn" onclick="updaData(${i})">Update</button>
                    <button class="delete-btn" onclick="deletData(${i})">Delete</button>
                </div>`;

            }

        }

    }

    document.getElementById("tbody").innerHTML = table;
    document.getElementById("cards").innerHTML = cards;

}