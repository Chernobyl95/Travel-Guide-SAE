const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const message = document.getElementById('message');

const errorFirstName = document.getElementById('error-firstname');
const errorLastName = document.getElementById('error-lastname');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-mobil');
const errorMessage = document.getElementById('error-message');
const submit = document.getElementById('submit');
const emailTemplate =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/; /*regex*/

const validate = addEventListener('input', (e) => {
  if (firstName.value.length < 3) {
    /*first name*/
    errorFirstName.style.display = 'block';
    submit.disabled = true;
  } else {
    errorFirstName.style.display = 'none';
    submit.disabled = false;
  }
  if (lastName.value.length < 3) {
    /*last name*/
    errorLastName.style.display = 'block';
    submit.disabled = true;
  } else {
    errorLastName.style.display = 'none';
    submit.disabled = false;
  }
  if (!emailTemplate.test(email.value)) {
    /*email*/
    errorEmail.style.display = 'block';

    submit.disabled = true;
  } else {
    errorEmail.style.display = 'none';
    submit.disabled = false;
  }
  if (mobile.value.length < 10) {
    /*mobile*/

    errorPhone.style.display = 'block';
    submit.disabled = true;
  } else {
    errorPhone.style.display = 'none';
    submit.disabled = false;
  }
  if (message.value.length < 10) {
    /*message*/
    errorMessage.style.display = 'block';
    submit.disabled = true;
  } else {
    errorMessage.style.display = 'none';
    submit.disabled = false;
  }
});

submit.addEventListener('click', () => {
  alert('Form Submitted Successfully!');
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  mobile.value = '';
  message.value = '';
  submit.disabled = true;
});
