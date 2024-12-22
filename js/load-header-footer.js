async function loadContent(selector, url, action) {
	const element = document.querySelector(selector);
	const fetchedItem = await fetch(url);
	const itemHtml = await fetchedItem.text();
	element.innerHTML = itemHtml;
	if (action) action();
  }

function addToggleNavbarEventListenner() {
	document.querySelector("#nav-toggle-container").addEventListener("click", function () {
		$("#nav-toggler").toggleClass("active");
		$('#nav-toggle-content').slideToggle();
	});
}

loadContent("#header", "components/header.html", null);
loadContent("#footer", "components/footer.html", addToggleNavbarEventListenner);