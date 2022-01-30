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
            mostraDados(r.title, r.url, r.explanation);
        },
        error: function () {
            alert('Ocorreu um erro! Selecione uma data e tente novamente');
          }
    });
}

function mostraDados(titulo,urlImg,explicacao){
    const campoDados = $('.dados');
    const img = `<img src="${urlImg}" alt="imagemNasa">`;
    
    
    const linha = '<h3>' + titulo + '</h3>' +
                  img + 
                  '<p>' + explicacao + '</p>';

    campoDados.append(linha);
    
}
