//Michael Bain
//1306
//Advanced Scalable Data

//Michael Bain
//1306
//Advanced Scalable Data
function onLoad() {

document.addEventListener("deviceready", onDeviceReady, false);
console.log("hello");
}

function onDeviceReady() {
	console.log("It Works!");
}

	$(function(){
  	var tag = "mpc_renaissance";
  	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=e79ad9e2173443deb8eea89ef21b15e9&amp;min_id=10";
  	$.getJSON(url, screenOutput);
	});

	var screenOutput = function(info){




	$("#data-msg").html("<h2>Search Results:</h2>");


	$.each(info.data, function(index, photo) {

	  var pic = "<li><img src ='" + photo.images.thumbnail.url + "' alt='" + photo.user.id
			 + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
			 $("#data-output").append(pic);


		});

	  };