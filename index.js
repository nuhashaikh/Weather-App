$(document).ready(function() {
    $('form').on('submit', function(event) {
        console.log("Form was submitted")
        event.preventDefault()
        $('#submit-button').fadeOut(500)
        $('input').fadeOut(500)
        $('.green-background').hide()
        $('.results').show(1000)
    })

    $('input').on('click', function() {
        $(this).css('background-color', 'aliceblue')
    })
});

