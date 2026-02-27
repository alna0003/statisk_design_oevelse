console.log("det virker");

const container = document.querySelector("main");

const endpoint = `https://kea-alt-del.dk/t7/api/products`;

function getData() {
fetch(endpoint).then(res => res.json()).then(showData);

}

function showData(data) {
    let markup = "";
    data.forEach(element =>{
        console.log(element);
        markup += `<a href="product.html">
      <article class="smallProduct onSale soldOut">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image">
        <h3>${element.productdisplayname}</h3>
        <p class="subtle">${element.category} | ${element.brand}</p>
        <p class="price">DKK <span>${element.price}</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span>974</span>,-</p>
          <p><span>25</span>%</p>
        </div>
      </article>
    </a>`;

    });    
    container.innerHTML=markup;
}

getData();
