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
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("check")
  const newProductNameInput = document.querySelectorAll('.create-product td input')[0]
  const newProductPriceInput = document.querySelectorAll('.create-product td input')[1]
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


const addProduct = document.querySelector('#create')
addProduct.addEventListener('click', createProduct)