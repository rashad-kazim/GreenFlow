document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.querySelectorAll('.img-container img');
    
        if (element) {
        
          element.forEach(function(el, key){
            
             el.addEventListener('click', function () {

                let galleryItem = $(this).attr('src');

                $('.img-big-one-container img').fadeOut(100,function(){
                    $(this).attr('src', galleryItem);
                }).fadeIn(100);
             
                el.classList.add("active");
                
                 element.forEach(function(ell, els){
                     if(key !== els) {
                         ell.classList.remove('active');
                     }
                 });
             });
          });
        }
    });
       
        const spanT = $('.last-price .discount-price').text(),
              mainFText = $(".past-price .original-price").text(),
              disPerSpan = $(".price-percentage span"),
              // span's container >> Main fee>> discount fee>> discount percentage
              disPerContainer = $(".price-percentage"),
              pastPriceContainer = $(".main-price .past-price"),
              lastPriceContainer = $(".main-price .last-price");
              
        
        if(spanT.length != 0){

            var spanN = Number(spanT),
                MainFNum = Number(mainFText),
                per ;
            
            per = Math.round(100 - (spanN / MainFNum) * 100);
                disPerContainer.removeClass("deactive-visibility");
                lastPriceContainer.removeClass("deactive-visibility");
                disPerSpan.text('-' + per);
                pastPriceContainer.addClass("has-lastprice");
        }
        else{
            disPerContainer.addClass("deactive-visibility");
            lastPriceContainer.addClass("deactive-visibility");
            pastPriceContainer.removeClass("has-lastprice");
        } 