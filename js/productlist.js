
const kategori = new URLSearchParams (window.location.search).get("category");
const container = document.querySelector("main");

document.querySelector("h2").textContent = kategori;
const listContainer = document.querySelector("#productlistContainer");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${kategori}&limit=110`;
function getData() {
fetch(endpoint).then(res => res.json()).then(showData);

}

function showData(data) {
    let markup = "";
    data.forEach(element =>{
        console.log(element);
        markup += `
        <a href="product.html?fisk=${element.id}">
      <article class="smallProduct ${element.soldout ? "onSale soldOut" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image">
        <h3>${element.productdisplayname}</h3>
        <p class="subtle">${element.category} | ${element.brand}</p>
        <p class="price">DKK <span>1299</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span>${Math.round(element.price - (element.price * element.discount) / 100)}</span>,-</p>
          <p><span>25</span>%</p>
          ${element.discount ? `<p><span>${element.discount}</span>%</p>` : ""}
        </div>
      </article>
    </a>`;

    });    
    container.innerHTML=markup;
}
getData();

document.querySelectorAll("button").forEach(Knap => Knap.addEventListener("click", filter));

let allData;
let udsnit;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(data => {
      allData = data;
      showData(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  console.log(e.target);
  if (valgt === "All") {
    showData(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    console.log(udsnit);
    showData(udsnit);
  }
}


function filter(e) {
  const valgt = e.target.textContent;
  console.log(e.target);
  if (valgt === "All") {
    udsnit = allData;
  } else {
    udsnit = allData.filter((element) => element.gender == valgt);
    console.log(udsnit);
    showData(udsnit);
  }
}

// Sortering
function sorter(e) {
  if (e.target.dataset.price) {
    const dir = e.target.dataset.price;
    if (dir == "up") {
    udsnit.sort((a, b) => (a.price- b.price));
  } else {
    udsnit.sort((a, b) => (b.price - a.price));
  }
} else {
  const dir = e.target.dataset.text;
  if (dir == "az") {
    udsnit.sort((a, b) => a.productdisplayname.localeCompare(b.productdisplayname, "da"));
  } else {
    udsnit.sort((a, b) => b.productdisplayname.localeCompare(a.productdisplayname, "da"));
  }
}

showData(udsnit);
}