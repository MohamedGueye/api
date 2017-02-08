$(document).ready(function() {
    $("button").on("click", function() {

        $("input").val();

        var city = $("input").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=23a3979215671ded7eb87905805bbffc";
        console.log(city);
        console.log(url);

           $.get(url, function(data) {
            $("#temp").html(data.main.temp)
            $("#hum").html(data.main.humidity)
            $("#Wind-Speed").html(data.wind.speed)
            
            
            
            
            var longitude = data.coord.lon
            
            var latitude = data.coord.lat
            
            console.log(latitude);
            console.log(longitude);
            
            var mapurl = "https://api.mapbox.com/v4/mapbox.dark/" +
            longitude+ "," + latitude+ "," +
            "10/600x600.png?access_token=pk.eyJ1IjoiZG9kZ2VyNDg3IiwiYSI6ImNpeXcxY2xraDAwZHUyd21wam00NWc5NXIifQ.VNP3UdlAUjSJVz3_FrBkEQ"
            
            $("img").attr("src", mapurl);
            console.log(mapurl);
            
        });

    });
});
