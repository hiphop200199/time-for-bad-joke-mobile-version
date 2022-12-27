document.addEventListener("DOMContentLoaded",function(){
      let bgm=new Audio("cyberpunk.ogg");
      let musicOn=document.querySelector(".bgm");
      musicOn.addEventListener("click",function(){
        if(bgm.paused){
            bgm.volume=0.5;
            bgm.play();
        }else{
        bgm.pause();
        }
      })
});  