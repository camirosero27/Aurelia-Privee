const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const status = document.querySelector('.form-status');
  const whatsappMessage = [
    'Hola, Aurelia Privée. Quiero agendar una cita.',
    '',
    `Nombre: ${formData.get('name')}`,
    `Correo: ${formData.get('email')}`,
    `Mensaje: ${formData.get('message')}`
  ].join('\n');
  const whatsappUrl = `https://wa.me/573188563155?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  status.textContent = 'Abrimos WhatsApp con tu información lista para enviar.';
  event.target.reset();
});