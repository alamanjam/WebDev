var boshal = "";
var obj1;
var obj2;
var id1;
var id2;
var rank1;
var rank2;
function getStats()
{
    var totalDeaths1 = 0;
    var totalKills1 = 0;
    var totalAssists1 = 0;
    var totalDeaths2 = 0;
    var totalKills2 = 0;
    var totalAssists2 = 0;
	var name = $("input.input1").val();
	var name2 = $("input.input2").val();
	name = name.toUpperCase();
	name = name.replace(/ /g,'');
	name2 = name2.toUpperCase();
	name2 = name2.replace(/ /g,'');
	console.log(name, name2);
    var json_contents = "";
	var snowshal;
	json_url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+ name + "," + name2 + "?api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2";
	$.ajax({
	    
			  method: "GET",
			  crossDomain: true,
			  url: "worker.php",
			  data: { url : json_url }
			})
			  .done(function( json_contents ) {
			      console.log(json_contents);
			      obj1 = $.parseJSON('[' + json_contents + ']');
			      obj3 = obj1[0];
			      for(var key in obj3) {
                    if(obj3.hasOwnProperty(key)) {
                         firstProp = obj3[key];
                         var tempname1 = firstProp["name"];
                         tempname1 = tempname1.toUpperCase();
                         tempname1 = tempname1.replace(/ /g,'');
                         console.log(tempname1);
                         if(tempname1 === name)
                            id1 = firstProp["id"];
                         if(tempname1 === name2)
                            id2 = firstProp["id"];
                     }
                    }
            json_url = "https://na.api.pvp.net/api/lol/NA/v2.5/league/by-summoner/"+ id1 + "/entry?api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2";
            $.ajax({

			  method: "GET",
			  crossDomain: true,
			  url: "worker.php",
			  data: { url : json_url }
			})
			  .done(function( json_contents ) {
			      console.log(json_contents);
			        obj1 = $.parseJSON('[' + json_contents + ']');
			      obj3 = obj1[0];
                    for(var key in obj3) {
                        
                    if(obj3.hasOwnProperty(key)) {
                         firstProp = obj3[key];
                         var tempname1 = firstProp[0]["entries"][0]["playerOrTeamName"];
                         tempname1 = tempname1.toUpperCase();
                         tempname1 = tempname1.replace(/ /g,'');
                         if(tempname1 === name)
                         {
                            games1 = firstProp[0]["entries"][0]["wins"] + firstProp[0]["entries"][0]["losses"];
                            percent1 = firstProp[0]["entries"][0]["wins"]/games1 * 100;
                            rank1 = String(firstProp[0]["tier"]) + " " + String(firstProp[0]["entries"][0]["division"]);
                         }
                     }
                    }
                     json_url = "https://na.api.pvp.net/api/lol/NA/v2.5/league/by-summoner/"+ id2 + "/entry?api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2";
                    $.ajax({

			  method: "GET",
			  crossDomain: true,
			  url: "worker.php",
			  data: { url : json_url }
			})
			
			  .done(function( json_contents ) {
			      console.log(json_contents);
			        obj1 = $.parseJSON('[' + json_contents + ']');
			      obj3 = obj1[0];
                    for(var key in obj3) {
                        
                    if(obj3.hasOwnProperty(key)) {
                         firstProp = obj3[key];
                         var tempname1 = firstProp[0]["entries"][0]["playerOrTeamName"];
                         tempname1 = tempname1.toUpperCase();
                         tempname1 = tempname1.replace(/ /g,'');
                         if(tempname1 === name2)
                         {
                            games2 = firstProp[0]["entries"][0]["wins"] + firstProp[0]["entries"][0]["losses"];
                            percent2 = firstProp[0]["entries"][0]["wins"]/games2 * 100;
                            rank2 = String(firstProp[0]["tier"]) + " " + String(firstProp[0]["entries"][0]["division"]);
                         }
                     }
                    }
                  json_url = "https://na.api.pvp.net/api/lol/NA/v1.3/stats/by-summoner/"+id1+"/ranked?season=SEASON2017&api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2";
        	$.ajax({
	    
			  method: "GET",
			  crossDomain: true,
			  url: "worker.php",
			  data: { url : json_url }
			})
			  .done(function( json_contents ) {
			      console.log(json_contents);
			      obj1 = $.parseJSON('[' + json_contents + ']');
			      obj3 = obj1[0];
			      obj3 = obj3["champions"];
			      for (var i in obj3)
			      {
			          totalDeaths1 = totalDeaths1 + obj3[i]["stats"]["totalDeathsPerSession"];
			          totalKills1 = totalKills1 + obj3[i]["stats"]["totalChampionKills"];
			          totalAssists1 = totalAssists1 +  obj3[i]["stats"]["totalAssists"];
			      }
			          json_url = "https://na.api.pvp.net/api/lol/NA/v1.3/stats/by-summoner/"+id2+"/ranked?season=SEASON2017&api_key=RGAPI-84c03ac0-2955-4db4-9a04-d887acb179f2";
        	$.ajax({
	    
			  method: "GET",
			  crossDomain: true,
			  url: "worker.php",
			  data: { url : json_url }
			})
			  .done(function( json_contents ) {
			      console.log(json_contents);
			      obj1 = $.parseJSON('[' + json_contents + ']');
			      obj3 = obj1[0];
			      obj3 = obj3["champions"];
			      for (var i in obj3)
			      {
			          totalDeaths2 = totalDeaths2+ obj3[i]["stats"]["totalDeathsPerSession"];
			          totalKills2 = totalKills2 + obj3[i]["stats"]["totalChampionKills"];
			          totalAssists2 = totalAssists2 +  obj3[i]["stats"]["totalAssists"];
			      }
                    console.log(rank1, rank2);
                    $("#rank1").text(rank1);
                    $("#rank2").text(rank2);
                    $("#games1").text(games1);
                    $("#games2").text(games2);
                    $("#percent1").text(percent1);
                    $("#percent2").text(percent2);
                    $("#kda1").text((totalKills1+totalAssists1)/(totalDeaths1));
                    $("#kda2").text((totalKills2+totalAssists2)/(totalDeaths2));
                    document.getElementById("allrows").style.visibility = "visible";
            
		    });
});
			  });
			  });
			  });
}