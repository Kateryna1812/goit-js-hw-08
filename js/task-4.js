const loginForm = document.querySelector(".login-form");
const dataFields = document.querySelectorAll('.data-field');

dataFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.style.outline = 'none';
    field.style.borderColor = '#808080';
  });

  field.addEventListener('blur', () => {
    field.style.borderColor = '';
  });
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = this.elements.email.value.trim();
  const passwordValue = this.elements.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  this.reset();
});