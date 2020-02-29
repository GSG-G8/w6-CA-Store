
const btnShowCart = document.querySelector("#btn_show_cart");
const btnShowAddProduct = document.querySelector("#btn_show_add_product");
const btnHidePopup = document.querySelector("#btn_hide_popup");
const btnSubmit = document.querySelector("#btn_submit");
const btnClearCart = document.querySelector("#btn_clear_cart");
const mainLogo = document.querySelector(".header__logo");
const popup = document.querySelector(".popup");

function showPopup() {
    popup.style.display = "block";
}
function hidePopup() {
    popup.style.display = "none";
}

btnHidePopup.addEventListener("click", () => { hidePopup(); })
mainLogo.addEventListener("click", () => {
    window.location = "/";
})

const productsContainer = document.querySelector(".products");
const cartContainer = document.querySelector(".popup__products__body");
const tagsContainer = document.querySelector(".tags");

const formProductName = document.querySelector("#new-product-name");
const formProductPrice = document.querySelector("#new-product-price");
const formProductImage = document.querySelector("#new-product-image");
const formProductBrand = document.querySelector("#new-product-brand");
const formProductDesc = document.querySelector("#new-product-description");
const formProductTags = document.querySelector("#new-product-tags");

function readForm() {
    return {
        name: formProductName.value,
        price: formProductPrice.value,
        image: formProductImage.value,
        brand_id: formProductBrand.value,
        description: formProductDesc.value,
        tags: formProductTags.value,
    }
}

function clearForm() {
    formProductName.value = "";
    formProductPrice.value = "";
    formProductImage.value = "";
    //formProductBrand.value = "";
    formProductDesc.value = "";
    formProductTags.value = "";
}

if (page == "seller") {
    btnShowAddProduct.addEventListener("click", () => {
        showPopup();
        btnSubmit.mode = "add";
    });

    btnSubmit.addEventListener("click", () => {
        if (btnSubmit.mode === "add") {
            addProduct(readForm());
            hidePopup();
            clearForm();
        }
        else if (btnSubmit.mode === "update") {
            updateProduct(btnSubmit.productID, readForm());
            hidePopup();
            clearForm();
        }
    })
}

if (page == "buyer") {
    btnClearCart.addEventListener("click", () => {
        clearCart();
        fetchCart();
    })
    btnShowCart.addEventListener("click", () => {
        showPopup();
        fetchCart();
    })
}

function creatProduct(obj, index) {
    const postItem = document.createElement("div");
    const postItemImage = document.createElement("div");
    const postItemDetails = document.createElement("div");
    const postItemName = document.createElement("div");
    const postItemPrice = document.createElement("div");

    postItem.className = "products__item";
    postItemImage.className = "products__item__image";
    postItemDetails.className = "products__item__details";
    postItemName.className = "products__item__name";
    postItemPrice.className = "products__item__price";

    postItemName.textContent = obj.name;
    postItemPrice.textContent = "$"+obj.price;
    postItemImage.style.backgroundImage = `url("${obj.image}")`;

    postItemDetails.appendChild(postItemName);
    postItemDetails.appendChild(postItemPrice);
    postItem.appendChild(postItemImage);
    postItem.appendChild(postItemDetails);
    
    if (page == "seller") {
        const postItemEdit = document.createElement("button");
        const postItemDelete = document.createElement("button");
        postItemEdit.className = "products__item__edit";
        postItemDelete.className = "products__item__delete";
        postItemEdit.textContent = "Update";
        postItemDelete.textContent = "Delete";
        postItemEdit.productIndex = index;
        postItemDelete.productID = obj.id;
        postItemEdit.onclick = updateThisProduct;
        postItemDelete.onclick = deleteThisProduct;
        postItemDetails.appendChild(postItemEdit);
        postItemDetails.appendChild(postItemDelete);
    }
    else if (page == "buyer"){
        const postItemAdd = document.createElement("button");
        postItemAdd.className = "products__item__add";
        postItemAdd.textContent = "Add To Cart";
        postItemAdd.productID = obj.id;
        postItemAdd.onclick = addThisToCart;
        postItemDetails.appendChild(postItemAdd);
    }

    return postItem;
}

function createCartItem(obj) {
    const productRow = document.createElement("div");
    const productName = document.createElement("div");
    const productPrice = document.createElement("div");
    const productQuantity = document.createElement("div");

    productRow.className = "popup__products__row";
    productName.className = "popup__products__lable";
    productPrice.className = "popup__products__lable";
    productQuantity.className = "popup__products__lable";
    
    productName.textContent = obj.name;
    productPrice.textContent = obj.price;
    productQuantity.textContent = obj.quantity;

    productRow.appendChild(productPrice);
    productRow.appendChild(productQuantity);
    productRow.appendChild(productName);

    return productRow;
}

function renderProducts(arr) {
    products = arr;
    productsContainer.textContent = "";
    arr.forEach( (product, index) => {
        productsContainer.appendChild(
            creatProduct(product, index)
        );
    });
}

function renderCart(arr) {
    cartContainer.textContent = "";
    arr.forEach( product => {
        cartContainer.appendChild(
            createCartItem(product)
        );
    });
}

function addThisToCart() {
    addToCart({
        product_id: this.productID,
        quantity: 1
    });
}

function deleteThisProduct() {
    deleteProduct(this.productID);
}

function updateThisProduct() {
    showPopup();
    const product = products[this.productIndex];
    btnSubmit.mode = "update";
    btnSubmit.productID = product.id;
    
    formProductName.value = product.name;
    formProductPrice.value = product.price;
    formProductImage.value = product.image;
    formProductBrand.value = product.brand_id;
    formProductDesc.value = product.description;
    formProductTags.value = "";
}

function selectThisTag() {
    fetchTagProducts(this.tagID);
}

function renderTags(arr) {
    tagsContainer.textContent = "";
    arr.forEach(tag => {
        const item = document.createElement("div");
        item.className = "tags__item";
        item.textContent = tag.name;
        item.tagID = tag.id;
        item.onclick = selectThisTag;
        tagsContainer.appendChild(item);
    })
}



document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchProducts();
    fetchTags();
});