document.addEventListener("DOMContentLoaded",function(){
      let jokes=["老鼠站不穩叫什麼?-->滑鼠","我知道大家都很想我，因為他們每天都會說中午要吃什麼...","i have a key,you have a value,oh, it`s Cookie!","你知道電腦怎麼句點人家嗎?他們分號人家...","你知道哪間科技公司最有邏輯嗎?羅技唷，因為他們是'logi''tech' ...","012345678...無nine..."]; 
      let bgm=new Audio("cyberpunk.ogg");
      let soundEffect=new Audio("typing.ogg");
      let radio=document.getElementById("radio");
      let screenPage=document.querySelector(".screen-up");
      let startBtn=document.querySelector(".web-button");
      startBtn.addEventListener("touchstart",function(){
          soundEffect.play();
          screenPage.innerHTML=jokes[Math.floor(Math.random()*(jokes.length-1))];
         
      })
     radio.addEventListener("touchstart",function(){
      if(bgm.paused){
      bgm.autoplay=true;
      bgm.loop=true;
      bgm.load();
      bgm.play();
      }else{
        bgm.pause();
      }
     
     });
});  