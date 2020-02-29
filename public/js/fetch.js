function fetchProducts() {
    fetch("/product/list")
        .then(res => res.json())
        .then(renderProducts)
}

function fetchTags() {
    fetch('/tags/list')
    .then(res => res.json())
    .then(renderTags);
}

function fetchTagProducts(tag_id) {
    fetch("/product_tags/products/"+tag_id)
        .then(res => res.json())
        .then(renderProducts)
}

function fetchCart() {
    fetch("/cart/list")
        .then(res => res.json())
        .then(renderCart)
}

function addProduct(obj) {
    fetch('/product/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(() => {
        fetchProducts();
        fetchTags();
      });
}

function updateProduct(id, obj) {
    fetch('/product/update/'+id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(fetchProducts);
}

function deleteProduct(id) {
    fetch('/product/delete/'+id, {
        method: 'delete'
      })
      .then(() => {
        fetchProducts();
        fetchTags();
      });
}

function addToCart(obj) {
    fetch('/cart/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(fetchCart);
}

function clearCart(obj) {
    fetch('/cart/clear', {
        method: 'delete'
    })
    .then(fetchCart);
}