document.addEventListener("DOMContentLoaded",function(){
        let pic=document.querySelector(".web-image");
        setInterval(changePic2,1000);
        setInterval(changePic3,2000);
         function changePic2(){
        pic.src="./mypic3.png";   
};        
        function changePic3(){
    pic.src="./mypic2.png";   
};    
});  