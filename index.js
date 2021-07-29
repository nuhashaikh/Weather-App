var myData= {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

}

$(document).ready(function() {
    $('form').on('submit', function(event) {
        console.log("Form was submitted")
        event.preventDefault()
        var weather= $('input').val()
        $('.results').append("<p> name: "+weather+"</p>")
        $('#submit-button').fadeOut(500)
        $('input').fadeOut(500)
        $('.green-background').hide()
        $('.results').show(1000)
    })

    $('.special-button').on('click', function(event){
        $('.results').hide(1000)
        $('.green-background').show(1000)
        $('input').show(1000)
        $('#submit-button').show(1000)
        var select= document.getElementsByClassName('results')
        select.removeChild(select.lastChild);
    })

    $('input').on('click', function() {
        $(this).css('background-color', 'aliceblue')
    })
});

