const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('.trybewarts-login');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

form.addEventListener('submit', (e) => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  } e.preventDefault();
});

function enableBtnSubmit() {
  btnSubmit.disabled = !agreement.checked;
}

agreement.addEventListener('click', enableBtnSubmit);
