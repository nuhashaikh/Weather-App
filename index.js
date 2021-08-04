var myApiKey= '5f5f6a11299b0cba17b8681dd582a052'



function displayData(data, userInput){
  $('.green-background').hide()

  $('.results').append("<p> Weather data about "+userInput+" : </p>")
  $('.results').append("<p> There is "+ data.weather[0].description + "</p>")

  checkWind(data.wind.speed)

  $('.results').append("<p> Temperature: "+ data.main.temp+ " °C </p>")
  $('.results').append("<p> Feels like temperature: "+ data.main.feels_like+ " °C </p>")
  $('.results').append("<p> Maximum temperature for today: "+ data.main.temp_max+ " °C </p>")
  $('.results').append("<p> Minimum temperature for today: "+ data.main.temp_min+ " °C </p>")
  $('.results').append("<p> Longitude "+ data.coord.lon+ " </p>")
  $('.results').append("<p> Latitude "+ data.coord.lat+ " </p>")
  $('#submit-button').fadeOut(500)
  $('input').fadeOut(500)
          
  $('.results').show(1000)
}
function checkWind(checkWind){
  var wind
  if(checkWind==0){
    wind= 'Calm'
  }else if(checkWind<19){
    wind= 'Light Winds'
  }else if(checkWind<29){
    wind='Moderate Winds'
  }else if(checkWind<39){
    wind='Fresh Winds'
  }else if(checkWind<50){
    wind='Strong Winds'
  }else if(checkWind<62){
    wind='Near Gate'
  }else if(checkWind<75){
    wind='Gale'
  }else if(checkWind<87){
    wind='Strong Gale'
  }else if(checkWind<102){
    wind='Storm'
  }else if(checkWind<117){
    wind='Violent Storm'
  }else if(checkWind>118){
    wind='Hurricane'
  }

  $('.results').append("<p> The wind is "+ wind+ " with a speed of "+checkWind +" km/h</p>")
}
$(document).ready(function() {
    $('form').on('submit', function(event) {
        console.log("Form was submitted")
        event.preventDefault()
        //grabbing user input
        var userInput= $('input').val()
 
        $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+userInput+'&appid='+myApiKey, function(data) {
          console.log('DATA', data)
          displayData(data, userInput)
        })
    })

    $('.special-button').on('click', function(event){
        $('.results').hide(1000)
        $('.results').text('')
        $('input').val('')
        $('.green-background').show(1000)
        $('input').show(1000)
        $('#submit-button').show(1000)

    })

    $('input').on('click', function() {
        $(this).css('background-color', 'aliceblue')
    })

});

