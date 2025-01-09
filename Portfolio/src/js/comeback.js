let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Reviens 😞";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

// (function () {
//     const detectDevTools = function () {
//         const widthThreshold = 100; // Get the width difference (means DevTools is opened)

//         if (window.outerWidth - window.innerWidth > widthThreshold ||
//             window.outerHeight - window.innerHeight > widthThreshold) {
            
//             document.body.innerHTML = "<h1>Accès refusé <br> </h1><p>Veuillez fermer les outils de développement pour continuer. <br> <br> Rafraichissez ensuite la page.</p>";
                
//             setInterval(() => {
//                 document.body.innerHTML = "<h1>Accès refusé  <br> </h1><p>Veuillez fermer les outils de développement pour continuer. <br> <br> Rafraichissez ensuite la page.</p>";
//             }, 100);
//         }
//     };
//     // N ms
//     setInterval(detectDevTools, 100);
// })();
