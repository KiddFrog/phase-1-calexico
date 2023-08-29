const menuItemsDiv = document.querySelector("#menu-items");
const dishImg = document.querySelector("#dish-image");
const dishName = document.querySelector("#dish-name");
const dishDesc = document.querySelector("#dish-description");
const dishPrice = document.querySelector("#dish-price");
const cartForm = document.querySelector("#cart-form");


fetch("http://localhost:3000/menu")
.then(response => response.json())
.then (data => {
    //loop through menu items
                data.forEach(menuItem => {
                    // create span
                        const span = document.createElement('span');
                    // put name in span
                    span.textContent = menuItem.name;
                    // attatch spans to div
                    menuItemsDiv.appendChild(span)

                    span.addEventListener('click', event =>{
                        renderMenuItem(menuItem);
                    })
                    // render menu item
                    renderMenuItem(data[0]);
                });
                                // Render first menu item
                    function renderMenuItem(menuItem){
                            dishImg.src = menuItem.image;
                            dishName.textContent = menuItem.name;
                            dishDesc.textContent = menuItem.description;
                            dishPrice.textContent = menuItem.price;
                    } 
                    cartForm.addEventListener('submit', event =>{
                        event.preventDefault()
                     // console.log("submit!")
                        const cartNumSpan = document.querySelector("#number-in-cart");
                        const currNum = cartNumSpan.textContent;
                        const numToAdd = event.target[0].value
                        // Parse the string value to make it addable
                        const newTotal = parseInt(currNum) + parseInt(numToAdd);
                        cartNumSpan.textContent = newTotal
                    })
})