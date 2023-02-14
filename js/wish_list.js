


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