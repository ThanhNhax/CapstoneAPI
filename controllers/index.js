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

window.addEventListener('DOMContentLoaded', () => {
  getProduct()
})

function renderProduct(arrProduct) {
  let html = "";
  for (let i = 0; i < 12; i++) {
    let pro = arrProduct[i];
    html += `
    
    <div class="col-2-4">
    <!--  product item -->
    <a href="#" class="product-item">
        <div class="item-img"
            style="background-image: url(${pro.image});">
        </div>

        <h4 class="item-name">
        ${pro.name}
        </h4>
        <div class="item-price">
            <span class="price-old">1.200.000đ</span>
            <span class="price-new">${pro.price}.000đ</span>
        </div>
        <div class="item-action">
            <span class="item-rating">
                <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i
                    class='bx bxs-star'></i><i class='bx bxs-star'></i><i
                    class='bx bxs-star'></i>
            </span>
            <span class="item-sold">Đã bán ${pro.quantity}</span>
        </div>
        <div class="item-location">
            TP. Hồ Chí Minh
        </div>

        <div class="item-favourite">
            <i class='bx bx-check'></i>
            <span>Yêu thích</span>
        </div>
        <div class="item-sale">
            <span class="sale-percent">
                10%
            </span>
            <span class="sale-title">
                GIẢM
            </span>
        </div>
    </a>
    </div>
 
 

          `;
  }

  document.querySelector("#productItem").innerHTML = html;
}
