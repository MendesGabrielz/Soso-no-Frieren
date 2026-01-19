
function TextAnimation() {
  const titulo = document.querySelector('.texto-animado');
  const letras = titulo.innerText.split('');
  titulo.innerText = '';

  letras.forEach((letra, i) => {
    const span = document.createElement('span');

    span.innerHTML = letra === ' ' ? '&nbsp;' : letra;
    span.style.animationDelay = `${i * 0.3}s`;

    titulo.appendChild(span);
  });
}

TextAnimation();