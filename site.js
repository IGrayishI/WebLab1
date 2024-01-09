
let arrayOfTeas = [
    { name: "English Breakfast", price: 12, description: "A classic blend, robust and invigorating.", pic: "images/EarlGray.jpg" },
    { name: "Earl Grey", price: 15, description: "Infused with bergamot for a citrusy aroma.", pic: "images/EarlGray.jpg" },
    { name: "Assam", price: 10, description: "Rich and malty, perfect for mornings.", pic: "images/EarlGray.jpg" },
    { name: "Darjeeling", price: 18, description: "Known as the champagne of teas, with a floral aroma.", pic: "images/EarlGray.jpg" },
    { name: "Ceylon", price: 14, description: "Bright and bold, with hints of citrus.", pic: "images/EarlGray.jpg" }
  ];
  
  function showProducts() 
  {
    let container = document.getElementById('productList');
    container.innerHTML = '';

    arrayOfTeas.forEach(Product => {
      let card = 
      `
      <div class="col-sm-6 col-md-4 col-lg-3 pb-2">
        <div class="card">
        <img src="${Product.pic}" class="card-img-top" alt="${Product.name}">
          <div class="card-body bg-secondary rounded">
            <h5 class="card-title bg-dark rounded text-white mb-0 p-1">${Product.name}</h5>
            <p class="card-text bg-secondary-subtle rounded px-2">${Product.description}</p>
            <p class="card-text text-white text-center bg-dark rounded">${Product.price}€</p>
          <div class="d-flex justify-content-center">
            <a href="#" onclick="addToCart('${Product.name}')" class="btn btn-dark">Add to cart</a>
          </div>
          </div>
        </div>
      </div>
      `;
      container.innerHTML += card;
    });
  }

  let cart = [];
  
  function addToCart(ProductName) {
    console.log(`Added ${ProductName} to the shopping cart.`);
    // Add logic here to add the selected Product to the shopping cart or perform any desired action
    cart.push(ProductName);
    showCart()
  }

  showProducts();

  function toggleCart() {
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.toggle('show');
    
  }

  function showCart() {
    const cartContainer = document.getElementById('cart-content');
    cartContainer.innerHTML = ''; // Clear previous cart items
    
    let totalPrice = 0; // Initialize total price variable
    
    const itemCounts = {};
    cart.forEach(productName => {
      if (itemCounts[productName]) {
        itemCounts[productName]++;
      } else {
        itemCounts[productName] = 1;
      }
    });
    
    Object.keys(itemCounts).forEach(productName => {
      const product = arrayOfTeas.find(tea => tea.name === productName);
      const count = itemCounts[productName];
      const itemTotalPrice = product.price * count; // Calculate total price for each item
      
      totalPrice += itemTotalPrice; // Accumulate total price
      
      const cartItem = `
        <div class="col-sm-6">
          <div class="cart-item bg-secondary rounded m-2">
            <img src="${product.pic}" alt="${product.name}" class="cart-item-image rounded">
            <div class="cart-item-details">
              <div class="d-flex justify-content-center">
                <p class="bg-secondary-subtle rounded ">${product.name} ${product.price}€ (${count})</p>
              </div>
            </div>
          </div>
        </div>
      `;
      cartContainer.innerHTML += cartItem;
    });
  
    // Display total price at the bottom of the cart
    const totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('total-price');
    totalPriceElement.textContent = `Total: ${totalPrice}€`;
    totalPriceElement.className = "bg-secondary text-light"
    cartContainer.appendChild(totalPriceElement);
  }
  
async function initMap() {
  const position = { lat: 57.70661926269531, lng: 11.969391822814941 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "SereniTea",
  });
}

initMap();

  function purchase() {
    // Logic for purchase action goes here
  alert("Thank you for your purchase");
  cart = [];
  showCart();
  }