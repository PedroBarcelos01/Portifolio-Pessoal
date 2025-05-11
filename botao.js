document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('form');
  const botaoEnviar = document.querySelector('button[type="submit"][data-button]');

  if (formulario && botaoEnviar) {
    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault();

      alert('Sua mensagem foi enviada com sucesso!');
      formulario.reset();
    });
  }
});