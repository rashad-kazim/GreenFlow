const Password_eye = document.querySelector('.fa-toggler-custom'),
      passType = document.querySelector('.user_log_in_pass'),
      message = document.querySelector('.error_message');

Password_eye.addEventListener('click', ()=>{
  if(Password_eye.classList.contains('fa-eye')){
    Password_eye.classList.remove('fa-eye');
    Password_eye.classList.add('fa-eye-slash');
    passType.type = "text";
  }
  else{
    Password_eye.classList.add('fa-eye');
    Password_eye.classList.remove('fa-eye-slash');
    passType.type = "password";

  } 
});

$('.forgot_pass').click(function(){
  $('.forgot_password_form').slideToggle(400);
});


//    message.style.display = "none";
