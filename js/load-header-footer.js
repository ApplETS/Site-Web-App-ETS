fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#header").innerHTML = html;

	const navToggleContainer = document.querySelector("#nav-toggle-container");
	const navToggler = document.querySelector("#nav-toggler");
	const navList = document.querySelector("#nav-list");

    let isTransitioning = false;

	navToggleContainer.addEventListener("click", function () {
        // Do not change state while animation is not finished
		if (isTransitioning) return;
	  
		navToggler.classList.toggle("active");
	  
		if (navList.style.height === "0px") {
		  // Open menu
		  navList.style.display = "flex";
		  const targetHeight = `${navList.scrollHeight}px`;
	  
		  requestAnimationFrame(() => {
			navList.style.height = targetHeight;
		  });
	  
		  navList.addEventListener("transitionend", function handleTransitionEnd() {
			navList.style.height = "auto";
			navList.removeEventListener("transitionend", handleTransitionEnd);
			isTransitioning = false;
		  });
	  
		  isTransitioning = true;
		} else {
		  // Close menu
		  navList.style.height = `${navList.scrollHeight}px`;
		  requestAnimationFrame(() => {
			navList.style.height = "0";
		  });
	  
		  navList.addEventListener("transitionend", function handleTransitionEnd() {
			navList.style.display = "none";
			navList.removeEventListener("transitionend", handleTransitionEnd);
			isTransitioning = false;
		  });
	  
		  isTransitioning = true;
		}
	  });
  })

fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector("#footer").innerHTML = html;
  })