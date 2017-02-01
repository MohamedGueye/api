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
        $("#temp").append(data.main.temp)
        $("#hum").append(data.main.humidity)
        $("#Wind Speed").append(data.wind.speed)
        });        

    });
});
