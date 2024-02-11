window.addEventListener("load", MyFunction());
function MyFunction(){
    let heading = document.querySelector("h1");
    // let dic_img1 = document.getElementById("p1_img"); 
    // let dic_img2 = document.getElementById("p2_img");

    number1 = Math.floor(Math.random()*6)+1;
    number2 = Math.floor(Math.random()*6)+1;
    // image of player 1
    let randomdicimg1 = "dice"+number1+".png";
    let randomdicimg1src = "images/"+randomdicimg1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomdicimg1src);

    // image of player 2
    let randomdicimg2 = "dice"+number2+".png";
    let randomdicimg2src = "images/"+randomdicimg2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomdicimg2src);
    if (number1 > number2){
        heading.innerHTML = "player 1 winner";
    }else if(number2 > number1){
        heading.innerHTML = "player 2 winner";
    }else if(number1 == number2){
        heading.innerHTML = "Both have a same point";
    }
    // if(number1 == 1){
    //     dic_img1.src="images/dice1.png";
    // }else if(number1 == 2){
    //     dic_img1.src="images/dice2.png";
    // }else if(number1 == 3){
    //     dic_img1.src="images/dice3.png";
    // }else if(number1 == 4){
    //     dic_img1.src="images/dice4.png";
    // }else if(number1 == 5){
    //     dic_img1.src="images/dice5.png";
    // }else if(number1 == 6){
    //     dic_img1.src="images/dice6.png";
    // }
    // console.log(number1)
    // console.log(number2)
    // if(number2 == 1){
    //     dic_img2.src="images/dice1.png";
    // }else if(number2 == 2){
    //     dic_img2.src="images/dice2.png";
    // }else if(number2 == 3){
    //     dic_img2.src="images/dice3.png";
    // }else if(number2 == 4){
    //     dic_img2.src="images/dice4.png";
    // }else if(number2 == 5){
    //     dic_img2.src="images/dice5.png";
    // }else if(number2 == 6){
    //     dic_img2.src="images/dice6.png";
    // }

    
}
