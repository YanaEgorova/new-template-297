export const item = product => {
  return `
  <li class="item">
  <div class="product__block js_product glass glass-m" id="${product.id}">
     <div class="product__block--inner">
    <div class="product__img-box">
      <img src="${product.image}" alt="" class="img" />
    </div>

    <div class="product__text-box">
    <span class="product__price">
    $${product.price.toFixed(2)}
  </span>
      <p class="product__name js_product-name">${product.name}</p>
    
   
    </div>
    </div>
    <div class="product__btn-block">
         <a href="product-page.html?id=${product.id}" class="btn btn--first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' || product.type == 'shoes' ? 'auto' : ''
  }">details</a>
      ${
        product.type == 'ring' || product.type == 'clothing' || product.type == 'shoes'
          ? ''
          : '<button class="btn js_add-to-cart">buy</button>'
      }
    </div>
  </div>
</li>
    `;
};
