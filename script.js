document.addEventListener("DOMContentLoaded",function(){
      let bgm=new Audio("cyberpunk.ogg");
      let soundEffect=new Audio("typing.ogg");
      let musicOn=document.querySelector(".bgm");
      let startBtn=document.querySelector(".web-button");
      musicOn.addEventListener("click",function(){
        if(bgm.paused){
            bgm.volume=0.5;
            bgm.play();
        }else{
        bgm.pause();
        }
      })
      startBtn.addEventListener("click",function(){
        
          soundEffect.play();
      })
     
});  