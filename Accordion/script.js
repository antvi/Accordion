var accordion = document.getElementsByClassName("accordion");


for (var i = 0; i < accordion.length; i++) {
	accordion[i].onclick = function(){

		this.classList.toggle('is-open');


		var content = this.nextElementSibling;



		if (content.style.maxHeight) {

			//open
			content.style.maxHeight = null;
		} else {
			//close
			content.style.maxHeight = content.scrollHeight + "px";
		}

	}
}