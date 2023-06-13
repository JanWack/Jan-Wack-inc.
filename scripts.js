function changeName() {
	var btn = document.getElementById("infoButton");
	if (btn.innerText == "Hide info") {
		btn.innerText = "Show info";
	} else {
		btn.innerText = "Hide info";
	}
	showFunc();
}

function showFunc() {
	var x = document.getElementById("infoGrid");
	if (x.style.display === "none") {
		x.style.display = "block";
		window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
	} else {
		x.style.display = "none";
		window.scrollTo({left: 0, bottom: document.body.scrollHeight, behavior: "smooth"});
	}
}