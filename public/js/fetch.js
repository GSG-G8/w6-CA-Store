function fetchProducts() {
    fetch("/product/list")
        .then(res => res.json())
        .then(renderProducts)
}

function addProducts(obj) {
    fetch('/product/add', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(fetchProducts);
}

