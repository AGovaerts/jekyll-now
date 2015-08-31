myData(data);

function myData(arr) {
	
	var out = "<ul class='collection with-header'><li class='collection-header'><h4>Posts</h4></li>";
	var i;

	for(i = arr.length-1; i >= 0; i--) {
		out += "<li class='collection-item'><div>" +
		"<span class='itda'>" + arr[i].datum + " - </span>" + 
		"<a href='" + arr[i].url + "'>" + arr[i].naam + "</a><span class='secondary-content'>" +
		arr[i].tag + "</span></div></li>";
	}
	out += "</ul>";
	document.getElementById("lines").innerHTML = out;
};