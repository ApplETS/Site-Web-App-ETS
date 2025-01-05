fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#header").innerHTML = html;

    document.querySelector("#nav-toggle-container").addEventListener("click", function () {
        const navToggler = document.querySelector("#nav-toggler");
        const navList = document.querySelector("#nav-list");
      
        // Toggle active class on the button
        navToggler.classList.toggle("active");
    
        if (navToggler.classList.length != 0) {
          // Open the menu
          navList.style.display = "flex"; // Ensure it becomes visible
          const targetHeight = navList.scrollHeight; // Get the content height
          navList.style.height = "0";
          requestAnimationFrame(() => {
            navList.style.height = `${targetHeight}px`;
          });
          document.getElementById("nav-toggle-container").setAttribute("aria-expanded", "true");
        } else {
          // Close the menu
          const onTransitionEnd = function () {
            // Fix problem occuring when spamming the button
            if (!navToggler.classList.contains("active"))
                navList.style.display = "none";
            
            navList.removeEventListener("transitionend", onTransitionEnd);
          };
      
          navList.style.height = "0";
          navList.addEventListener("transitionend", onTransitionEnd);
          document.getElementById("nav-toggle-container").setAttribute("aria-expanded", "false");
        }
      });
  })

fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#footer").innerHTML = html;
  })