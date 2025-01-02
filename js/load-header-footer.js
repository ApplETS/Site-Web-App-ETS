$("#header").load("components/header.html", function() {
	document.querySelector("#nav-toggle-container").addEventListener("click", function () {
		$("#nav-toggler").toggleClass("active");
		$('#nav-toggle-content').slideToggle();
	});
});
$("#footer").load("components/footer.html");