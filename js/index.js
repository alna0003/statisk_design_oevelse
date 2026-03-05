const container = document.querySelector('.categoryList');
const endpoint = `https://kea-alt-del.dk/t7/api/categories`;

function getData() {
    fetch (endpoint).then (res => res.json()).then (showData)
}

function showData (data) {
    let markup = "";
    data.forEach((element) => markup += `<a href="productlist.html?category=${element.category}">${element.category}</a>`);
    
    container.innerHTML = markup;
}
getData();