document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const form = document.querySelector('form[name="newsletter"]');
if (form) {
  form.addEventListener('submit', () => {
    console.log('Formulário enviado com sucesso!');
  });
}
