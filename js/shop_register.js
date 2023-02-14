const Password_eye = document.querySelector('.fa-toggler-custom'),
      passType = document.querySelector('.user_log_in_pass'),
      message = document.querySelector('.error_message'),
      optionMenu = document.querySelector('.choose-city-container'),
      selectBtn = document.querySelector('.select-city-container'),
      options = document.querySelectorAll('.option'),
      sBtn_text = document.querySelector('.main-option-container');

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







selectBtn.addEventListener("click", ()=> {
  optionMenu.classList.toggle("active");
  });
  
  options.forEach(o => {
  o.addEventListener("click", () => {
  let selectedOption = o.querySelector(".option-text").innerText;
  sBtn_text.innerText = selectedOption;
  optionMenu.classList.remove("active");
  });
  });
  
  window.addEventListener('click', function(e) {
  if (!optionMenu.contains(e.target)) {
  optionMenu.classList.remove('active');
  }
  });

