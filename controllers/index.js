// GET API
function getProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  // xử lý thành công
  promise.then(function (result) {
    console.log(result.data.content);
    renderProduct(result.data.content);
  });
  // xử lý thất bại
  promise.catch(function (error) {
    console.log(error.response.date);
  });
}

window.onload = function () {
  getProduct();
};

function renderProduct(arrProduct) {
  let html = "";
  for (let i = 0; i < 6; i++) {
    let pro = arrProduct[i];
    html += `
    <div class="product-feature-item col-4 my-3">
        <div class="card ">
            <img src="${pro.image}" alt="...">
            <div class="card-body">
                <h4>${pro.name}</h4>
                <p>${pro.description}</p>
            </div>
            <div class="card-bottom ">
               <a class="btn btn-buy" href="./detail.html?productid=${pro.id}">Buy now</a>
                <p>85$</p>
            </div>
        </div>
    </div>
          `;
  }
  document.querySelector(".product-feature").innerHTML = html;
}
