// template_zxziqaa
// service_axo6vw8
// tB0V0v-Wu2vRTAuTJ

let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += ' modal__overlay--visible';
  emailjs
    .sendForm(
      'service_axo6vw8',
      'template_zxziqaa',
      event.target,
      'user_tB0V0v-Wu2vRTAuTJ'
).then((response) => {
  throw new Error('Error');
  loading.classList.remove('modal__overlay--visible');
  success.classList += 'modal__overlay--visible';    
}).catch(() => {
  loading.classList.remove("modal__overlay--visible");
  alert(
    "The email service is temporarily unavailable. Please contact me directly on butkusjohn@gmail.com"
  );
});
}