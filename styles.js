document.addEventListener("DOMContentLoaded",function(){
    var num1 = Math.floor((Math.random()*6)+1) // picking random number from 1 to 6 
    var num2 = Math.floor((Math.random()*6)+1)
   
    var image1 = document.getElementsByClassName("img1")[0]
    var image2 = document.getElementsByClassName("img2")[0]

    var downloadingimage1 = new Image()
    var downloadingimage2 = new Image()
    src1 = "images/"
    src2 = "images/"

    
    if (num1==1){
        //load image1
        src1+="dice1.png"
    }
    else if (num1==2){
        //load image2
        src1+="dice2.png"

    }
    else if (num1==3){
        //load image 3
        src1+="dice3.png"

    }
    else if (num1==4){
        //load image 4
        src1+="dice4.png"

    }
    else if (num1==5){
        //load image 5
        src1+="dice5.png"

    }
    else if (num1==6){
        //load image 6
        src1+="dice6.png"

    }

    if (num2==1){
        //load image1
        src1+="dice1.png"

    }
    else if (num2==2){
        //load image2
        src1+="dice2.png"

    }
    else if (num2==3){
        //load image 3
        src1+="dice3.png"

    }
    else if (num2==4){
        //load image 4
        src1+="dice4.png"

    }
    else if (num2==5){
        //load image 5
        src1+="dice5.png"

    }
    else if (num2==6){
        //load image 6
        src1+="dice6.png"

    }
 
})