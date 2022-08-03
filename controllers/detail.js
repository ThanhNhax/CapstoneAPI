import { product } from "../models/product.js";

window.onload = function () {

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('productid');
  // console.log('params', myParam)
  //Gọi API
  let promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
    method: 'GET',
  });

  //Xử lý thành công
  promise.then(function (result) {
    let pd = result.data.content;
    // console.log('relatedProducts', pd.relatedProducts);
    // console.log("pd", pd);
    renderProduct(pd);
    //Tạo button Size giày
    let arrSize = pd.size;
    renderButtuonSize(arrSize);
    /*tạo layouts cho realatesProduct */
    renderRealatesProduct(pd.relatedProducts);
  });
  //Xử lý thất bại
  promise.catch(function (error) {
    console.log(error);
  });
};
let renderProduct = (pd) => {
  let htmlProduct = `
            <div class="container">
                <div class="row">
                    <div class="product_img col-4" id="image">
                        <img src="${pd.image}">
                </div>
                <div class="product_title col-6">
                    <h1>${pd.name}</h1>
                    <p id="des">${pd.description}</p>
                    <h3>Available size</h3>
                    <div id="btn">

                    </div>
                    <h4>${pd.price}$</h4>
                    <div class="so_luong">
                        <button>+</button>
                        <span> 1 </span>
                        <button>-</button>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>

        `;
  document.querySelector(".product").innerHTML = htmlProduct;
}
let renderButtuonSize = (arr) => {
  let htmlBtn = "";
  for (let key of arr) {
    htmlBtn += `
            <button>${key}</button>
            `;
  }
  document.querySelector("#btn").innerHTML = htmlBtn;
}
let renderRealatesProduct = (arr) => {
  let htmlRealateProduct = "";
  for (let key of arr) {
    console.log("key", key);
    htmlRealateProduct += `
            <div class="item col-4">
                    <div class="card ">
                        <img src="${key.image}" alt="">
                        <div class="card_body">
                            <h4>${key.name}</h4>
                            <p>${key.shortDescription}</p>
                        </div>
                        <div class="card_bottom ">
                            <a href="./detail.html?productid=${key.id}">    
                              <button>Buy now</button>
                            </a>
                            <p>${key.price}$</p>
                        </div>
                    </div>
                </div>
            `;
  }
  document.querySelector(".realate_list").innerHTML = htmlRealateProduct;
}