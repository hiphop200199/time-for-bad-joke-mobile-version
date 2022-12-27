
document.addEventListener("DOMContentLoaded",function(){
        let mouse = document.querySelector(".web-cursor");
        let pic=document.querySelector(".web-image");
        window.addEventListener("mousemove", cursor);
       
        setInterval(changePic2,1000);
        setInterval(changePic3,2000);
        function cursor(e) {   
            mouse.style.top = e.pageY + "px"; 
            mouse.style.left = e.pageX + "px";
        };
       
        
          
       
      
   
         function changePic2(){
        pic.src="./mypic3.png";   
};        
        function changePic3(){
    pic.src="./mypic2.png";   
};    
});  