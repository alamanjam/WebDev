var boshal = "";

function getStats()
{
	// $.getJSON("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Boshal?api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2&output=jsonp&callback=?",function(json3){
	// 	console.log(json3);
	// 	boshal = json3;
	// });
	json_url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Boshal?api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2"
	$.ajax({
			  method: "GET",
			  url: "worker.phps",
			  data: { url : json_url }
			})
			  .done(function( json_contents ) {
			    console.log( "MESSAGE FROM PHP: " + json_contents );
			  });
}
