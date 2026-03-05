
const fisk = new URLSearchParams (window.location.search).get("fisk");

const container = document.querySelector("#productContainer");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${fisk}`;
function getData() {
fetch(endpoint).then(res => res.json()).then(showData);

}

function showData(data) {

        console.log(data);
        container.innerHTML = `
    <figure>
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produktbillede" class="productImage">
      <span class="saleLabel"></span>
    </figure>
    <section class="productDetails">
      <h2 class="productName">${data.productdisplayname}</h2>
      <div>
        <p class="articleType"><span class="bold">Type:</span> Caps</p>
        <p class="productCategory"><span class="bold">Kategori:</span> Accessories</p>
        <p class="productPrice"><span class="bold">Pris:</span> 699,-</p>
        <p class="stock"><span class="bold">Stock:</span> 5</p>
      </div>
      <button class="buyButton">Køb nu</button>
    </section>`;
}
getData();
