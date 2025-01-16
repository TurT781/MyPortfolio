// Select the menu icon and navbar for mobile toggle functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Change the title
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back 🔭";
})
window.addEventListener('focus', () => {
    document.title = docTitle;
})
// Toggle the mobile menu and icon on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon to "X" on toggle
    navbar.classList.toggle('active'); // Show or hide the navbar
};

// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add scroll event listener to window
window.onscroll = () => {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    // Loop through each section to handle animations and active links
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position
        let offset = sec.offsetTop; // Distance of the section from the top of the document
        let height = sec.offsetHeight; // Height of the section
        let midScreen = window.innerHeight / 2; // Middle position of the screen
        let id = sec.getAttribute('id'); // Section ID for navigation links

        // Trigger animations when the middle of the screen is inside the section
        if (top + midScreen >= offset && top + midScreen < offset + height) {
            // Highlight the corresponding navigation link
            navLinks.forEach(links => {
                links.classList.remove('active'); // Remove 'active' class from all links
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active'); // Add 'active' class to the current link
            });

            // Add animation class to the section
            sec.classList.add('show-animate');
        } else {
            // Remove animation class if the section is out of view
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header functionality
    header.classList.toggle('sticky', window.scrollY > 100); // Add 'sticky' class when scrolled down

    // Close the mobile menu and reset the icon when a navigation link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animate the footer when it enters the viewport
    footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
    );
};
// // Disabled dev tool
// (function () {
//     const widthThreshold = 100; // higher difference to detectDevTools
//     let devToolsOpen = false;

//     const detectDevTools = function () {
//         const widthDifference = window.outerWidth - window.innerWidth;
//         const heightDifference = window.outerHeight - window.innerHeight;

//         // only if dev tools is open
//         if (widthDifference > widthThreshold || heightDifference > widthThreshold) {
//             devToolsOpen = true;
//             document.body.innerHTML = `
//             <div style="text-align: center";>
//                 <h1 style ="color:red" >Access denied</h1>
//                 <h1 style="font-size:5vh">Please close the inspector to see my Portfolio</h1>
//             </div>
//             `;
//         } else if (devToolsOpen) {
//             // reload the window since we close dev tools
//             devToolsOpen = false;
//             location.reload();
//         }
//     };
//     // Watch each 100ms if it detects dev tools
//     setInterval(detectDevTools, 100);
// })();

