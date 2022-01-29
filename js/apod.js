$('#submit').click(function (event) {
    event.preventDefault();
    apiNasa();
});


function apiNasa() {
    const chaveNasa = 'XXZ6XHRbgijrqIf0dHbRo1Ga4leU8wQMfXvRX719';
    const dataEscolhida = $('#data').val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${chaveNasa}&date=${dataEscolhida}`,
        //    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        success: function (r) {
            console.log(r)
        }
    });
}

