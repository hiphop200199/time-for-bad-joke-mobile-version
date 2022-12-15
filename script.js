
document.addEventListener("DOMContentLoaded",function(){
        let mouse = document.querySelector(".web-cursor");
        let webBody=document.body;
        let webTitle=document.querySelector(".web-title");
        window.addEventListener("mousemove", cursor);
        randomBackgroundColor();
        randomTitleColor();
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
    });