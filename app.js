var img_main = document.getElementById("img_main");
        var img_1 = document.getElementById("img_1");
        var img_2 = document.getElementById("img_2");
        var img_3 = document.getElementById("img_3");
    
        img_1.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; 
            img_2.style.border = "none"; 
            img_3.style.border = "none"; 
        });
    
        img_2.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; 
            img_1.style.border = "none"; 
            img_3.style.border = "none"; 
        });
    
        img_3.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; 
            img_1.style.border = "none"; 
            img_2.style.border = "none"; 
        });

        img_1.addEventListener('mouseout', function (){
            img_main.src = 'image/main.jpeg';
            img_1.style.border = "none"; 
            img_2.style.border = "none"; 
            img_3.style.border = "none"; 

        })
        img_2.addEventListener('mouseout', function (){
            img_main.src = 'image/main.jpeg';
            img_1.style.border = "none"; 
            img_2.style.border = "none"; 
            img_3.style.border = "none"; 
        })
        img_3.addEventListener('mouseout', function (){
            img_main.src = 'image/main.jpeg';
            img_1.style.border = "none"; 
            img_2.style.border = "none"; 
            img_3.style.border = "none"; 
        })