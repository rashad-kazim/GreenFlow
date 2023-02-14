const optionMenu = document.querySelector('.choose-city-container'),
selectBtn = document.querySelector('.select-city-container'),
options = document.querySelectorAll('.option'),
sBtn_text = document.querySelector('.main-option-container');



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

//Block and show discount on products cards
$(document).ready(function(){
$(".products-cards").each(function(e){
const spanT = $(this).find(".after-discount-fee span").text(),
      mainFText = $(this).find(".main-fee span .fee-number").text(),
      disPer = $(this).find(".discount-persentage-container"),
      resultPer = $(this).find(".discount-persentage-container span span"),
      afterDisFeeToggle = $(this).find(".after-discount-fee"),
      fNum2 = $(this).find(".main-fee span");


if(spanT.length != 0){
disPer.removeClass("blocked-discount");
  var spanN = Number(spanT);
  var MainFNum = Number(mainFText);
  var per = Math.round(100 - (spanN / MainFNum) * 100);
  afterDisFeeToggle.removeClass("blocked-discount");
  resultPer.text(per);
  fNum2.addClass("active-discount");
}
else{
  afterDisFeeToggle.addClass("blocked-discount");
  disPer.addClass("blocked-discount");
  fNum2.removeClass("active-discount");
} 
});
});
//Block and show discount on products cards





const plus = 'images/icons/heart-removebg-preview.png',
      minus = 'images/icons/heart-full.png';

$(document).ready(function(){
$('.products-cards').each(() =>{
$(this).find(".image-container div .make-wish-product").click(function(event) {   
event.preventDefault();
if ($(this).find("img").attr('src') === plus) {
  $(this).find("img").attr('src', minus);
} else {
  $(this).find("img").attr('src', plus);
}

    });
  });
});
