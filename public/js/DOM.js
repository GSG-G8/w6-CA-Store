
const btnShowCart = document.querySelector("#btn_show_cart");
const btnHideCart = document.querySelector("#btn_hide_popup");
const btnAddProduct = document.querySelector("#btn_add_product");

const popup = document.querySelector(".popup");

function showPopup() {
    popup.style.display = "block";
}
function hidePopup() {
    popup.style.display = "none";
}

btnShowCart.addEventListener("click", () => { showPopup(); })
btnHideCart.addEventListener("click", () => { hidePopup(); })


const productsContainer = document.querySelector(".products");

const newProductName = document.querySelector("#new-product-name");
const newProductPrice = document.querySelector("#new-product-price");
const newProductImage = document.querySelector("#new-product-image");
const newProductBrand = document.querySelector("#new-product-brand");
const newProductDesc = document.querySelector("#new-product-description");

btnAddProduct.addEventListener("click", () => {
    addProducts({
        name: newProductName.value,
        price: newProductPrice.value,
        image: newProductImage.value,
        brand_id: newProductBrand.value,
        description: newProductDesc.value,
        tags: "",
    });
    hidePopup();
})

function creatProduct(obj) {
    const postItem = document.createElement("div");
    const postItemImage = document.createElement("div");
    const postItemDetails = document.createElement("div");
    const postItemName = document.createElement("div");
    const postItemPrice = document.createElement("div");
    const postItemAdd = document.createElement("button");

    postItem.className = "products__item";
    postItemImage.className = "products__item__image";
    postItemDetails.className = "products__item__details";
    postItemName.className = "products__item__name";
    postItemPrice.className = "products__item__price";
    postItemAdd.className = "products__item__add";

    postItemName.textContent = obj.name;
    postItemPrice.textContent = "$"+obj.price;
    postItemAdd.textContent = "Add To Cart";
    postItemImage.style.backgroundImage = `url("${obj.image}")`;

    postItemDetails.appendChild(postItemName);
    postItemDetails.appendChild(postItemPrice);
    postItemDetails.appendChild(postItemAdd);
    postItem.appendChild(postItemImage);
    postItem.appendChild(postItemDetails);

    return postItem;
}

function renderProducts(arr) {
    productsContainer.textContent = "";
    arr.forEach( product => {
        productsContainer.appendChild(
            creatProduct(product)
        );
    });
}

fetchProducts();