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

    // JavaScript to Toggle Mobile Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".nav-links");

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
        });
    }

    // Select all the anchor tags inside nav-links
    const navLinks = document.querySelectorAll('.nav-links li a');

    // Add click event to each link for toggling details
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID
            const targetID = this.getAttribute('href').replace('#', '');
            const targetPanel = document.querySelector(`#${targetID} .panel`);

            // Hide all other panels
            document.querySelectorAll('.panel').forEach(panel => {
                if (panel !== targetPanel) {
                    panel.classList.remove('active');
                }
            });

            // Toggle the visibility of the clicked panel
            if (targetPanel) {
                targetPanel.classList.toggle('active');
            }
        });
    });
});





// // JavaScript code for Add to Cart functionality
// document.addEventListener("DOMContentLoaded", function () {
//     // Select all "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll("button");

//     // Add click event listener to each button
//     addToCartButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const productName = button.parentElement.querySelector("p").textContent;
//             alert(`${productName} has been added to your cart!`);
//         });
//     });
// });


// // JavaScript to Toggle Mobile Menu
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });


// // Select the parent container (nav-links)
// const navLinksContainer = document.querySelector(".nav-links");

// // Select all the anchor tags inside nav-links
// const navLinks = document.querySelectorAll('.nav-links li a');

// // Add click event to each link
// navLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default anchor behavior

//     // Get the target section ID
//     const targetID = this.getAttribute('href').replace('#', '');
//     const targetPanel = document.querySelector(`#${targetID} .panel`);

//     // Hide all other panels
//     document.querySelectorAll('.panel').forEach(panel => {
//       if (panel !== targetPanel) {
//         panel.classList.remove('active');
//       }
//     });

//     // Toggle the visibility of the clicked panel
//     targetPanel.classList.toggle('active');
//   });
// });
