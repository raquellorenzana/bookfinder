function bookSearch() {
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""
	console.log(search)

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search, 
		dataType: "json",

		success: function(data){
		var results = document.getElementById('results')
		for(i=0; i<data.items.length; i++){
			results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</2>"
	}
	},

		type: 'GET'
	});
}
document.getElementById('button').addEventListener('click', bookSearch, false)

document.onkeydown = function(e){
	
   if(e.keyCode == 13){ 
   	e.preventDefault();
   	bookSearch();
   }
};
