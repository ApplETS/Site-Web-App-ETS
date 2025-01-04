fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#header").innerHTML = html;
    document.querySelector("#nav-toggle-container").addEventListener("click", function () {
      document.querySelector("#nav-toggler").classList.toggle("active");
      const navList = document.querySelector("#nav-list");

      if (!navList.style.height || navList.style.height === "0px") {
		// Open menu
		navList.style.display = "flex";
        navList.style.height = `${navList.scrollHeight}px`;
      } else {
		// Close menu
        navList.style.height = "0";
		navList.addEventListener('transitionend', function applyEvent() {
			navList.style.display = "none";
			navList.removeEventListener('transitionend', applyEvent);
		});
      }
    });
  })

fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#footer").innerHTML = html;
  })
