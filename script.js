
document.addEventListener("DOMContentLoaded",function(){
        let mouse = document.querySelector(".web-cursor");
        let webBody=document.body;
        let webTitle=document.querySelector(".web-title");
        let pic=document.querySelector(".web-image");
        window.addEventListener("mousemove", cursor);
        randomBackgroundColor();
        randomTitleColor();
        setInterval(changePic,1000);
        setInterval(changePic2,2000);
        setInterval(changePic3,3000);
        function cursor(e) {   
            mouse.style.top = e.pageY + "px"; 
            mouse.style.left = e.pageX + "px";
        };
        function randomBackgroundColor(){
            webBody.style.backgroundColor=`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.random()})`;
        };
        function randomTitleColor(){
            webTitle.style.color=`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        };
        function changePic(){
                pic.src="./mypic2.png";   
    };
         function changePic2(){
        pic.src="./mypic3.png";   
};        
        function changePic3(){
    pic.src="./mypic.png";   
};    
});  