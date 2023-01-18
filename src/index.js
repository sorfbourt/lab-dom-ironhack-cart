// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subtotal = price*quantity

  product.querySelector(".subtotal span").innerText = subtotal

  return subtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
 products.forEach(element => updateSubtotal(element))

  // ITERATION 3
  const subtotal = document.querySelectorAll('.subtotal span')

  let sum = 0;

  subtotal.forEach((element)=>{
    sum += parseInt(element.innerText)
  }) 

  document.querySelector('#total-value span').innerText = sum
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentElement.parentElement
  //console.log(product)
  product.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("check")
  const newProductNameInput = document.querySelectorAll('.create-product td input')[0].value
  console.log(newProductNameInput)
  const newProductPriceInput = document.querySelectorAll('.create-product td input')[1].value
  console.log(newProductPriceInput)
 // const newProducts = document.querySelectorAll('.product:last-child').insertAfter('<div>...code goes in here...</div>');
  const newProducts = document.querySelector('tbody').innerHTML += `<tr class="product">
  <td class="name">
    <span>${newProductNameInput}</span>
  </td>
  <td class="price">$<span>${newProductPriceInput}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove')
  removeProductBtn.forEach(element => {
    element.addEventListener('click', removeProduct)
  })
  

const addProductBtn = document.querySelector('#create')
addProductBtn.addEventListener('click', createProduct)
});


