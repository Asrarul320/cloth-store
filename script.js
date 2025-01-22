// JavaScript code for Add to Cart functionality
document.addEventListener("DOMContentLoaded", function () {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll("button");

    // Add click event listener to each button
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.querySelector("p").textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
});
