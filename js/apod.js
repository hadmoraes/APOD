$('#submit').click(function (event) {
    event.preventDefault();
    apiNasa();
});


function apiNasa() {
    const chaveNasa = 'XXZ6XHRbgijrqIf0dHbRo1Ga4leU8wQMfXvRX719';
    const dataEscolhida = $('#data').val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${chaveNasa}&date=${dataEscolhida}`,
        success: function (r) {
            console.log(r);
            console.log(r.date);
            console.log(r.title);
            console.log(r.explanation);
        },
        error: function () {
            alert('Ocorreu um erro! Selecione uma data e tente novamente');
          }
    });
}

