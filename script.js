document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 5000);

    const textElement = document.getElementById('typing-text');
    const text = "Olá, eu sou o Emanuel de Marão!";
    let index = 0;

    function type() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajuste o tempo de digitação (em milissegundos) aqui
      }
    }

    type();
  });