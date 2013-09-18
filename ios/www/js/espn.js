function onLoad() {

document.addEventListener("deviceready", onDeviceReady, false);
console.log("hello");
}

function onDeviceReady() {
	console.log("It Works!");
}
// Example JSONP request with jQuery
$.ajax({
	url: "http://api.espn.com/v1/sports/news/headlines/",
	data: {
		// enter your developer api key here
		apikey: "zhnt7m4bemtbqt73ypfg7svy",
		// the type of data you're expecting back from the api
		_accept: "application/json"
	},
	dataType: "jsonp",
	success: function (data) {
		// create an unordered list of headlines
		var ul = $('<ul/>');
		$.each(data.headlines, function () {
			var li = $('<li/>').text(this.headline);
			ul.append(li)
		});
		// append this list to the document body
		$('#espn').append(ul);
      
	},
});