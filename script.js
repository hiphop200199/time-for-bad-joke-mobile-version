document.addEventListener("DOMContentLoaded",function(){
      let bgm=new Audio("cyberpunk.ogg");
      let soundEffect=new Audio("typing.ogg");
      let computer=document.querySelector(".computer");
      let startBtn=document.querySelector(".web-button");
      let playstage=document.getElementById("playstage");
      let offstage=document.getElementById("offstage");
      let radio=document.getElementById("radio");
      startBtn.addEventListener("click",function(){
        
          soundEffect.play();
      })
      playstage.addEventListener("drop",dropAndPlay);
      playstage.addEventListener("dragover",allowDrop);
      offstage.addEventListener("drop",dropAndPause);
      offstage.addEventListener("dragover",allowDrop);
      radio.addEventListener("dragstart",drag);
      function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
      }
      function dropAndPlay(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById(data).style.left = "1vmax";
        document.getElementById(data).style.top = "1vmax";
        bgm.autoplay=true;
        bgm.loop=true;
        bgm.load();
        bgm.play();
        computer.style.animation="beatsOhYeah 7s linear alternate infinite";
       
      }
      function dropAndPause(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById(data).style.left = "1vmax";
        document.getElementById(data).style.top = "1vmax";
        bgm.pause();
        computer.style.animation="none";
      }
      function allowDrop(event) {
        event.preventDefault();
      }
});  