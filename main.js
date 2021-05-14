canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d") ;
 rover_width = 100 ;
 rover_height = 90 ;
 rover_x = 10 ;
 rover_y = 10 ;
 Array1 = ["mars image 1.jpg","mars image 3.jpg","mars2.png","mars image 4.jpg"];
 random_number = Math.floor(Math.random()*4);
 bimage = Array1[random_number];
 rimage = "MARSROVER.png" ;
 function add() {
     bimage_img = new Image() ;
     bimage_img.onload=uploadbackground ; 
     bimage_img.src=bimage ;
     rimage_img = new Image() ;
     rimage_img.onload=uploadrover; 
     rimage_img.src=rimage ;

 }
function uploadbackground(){
    ctx.drawImage(bimage_img,0,0,canvas.width,canvas.height) ;
}
function uploadrover(){
    ctx.drawImage(rimage_img,rover_x,rover_y,rover_width,rover_height) ;
}
window.addEventListener("keydown",my_keydown) ;
function my_keydown(e){
key_pressed = e.keyCode ;
console.log(key_pressed) ;
if(key_pressed=='37'){
    left() ;
    console.log("left") ;
} 
if(key_pressed=='38'){
    up() ;
    console.log("up") ;
} 
if(key_pressed=='39'){
    right() ;
    console.log("right") ;
} 
if(key_pressed=='40'){
    down() ;
    console.log("down") ;
} 
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10 ;
        console.log("when left is pressed,x="+rover_x+"y="+rover_y);
        uploadbackground() ;
        uploadrover();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10 ;
        console.log("when up is pressed,x="+rover_x+"y="+rover_y);
        uploadbackground() ;
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10 ;
        console.log("when right is pressed,x="+rover_x+"y="+rover_y);
        uploadbackground() ;
        uploadrover();
    }
}
function down(){
    if(rover_y<=550){
        rover_y=rover_y+10 ;
        console.log("when down is pressed,x="+rover_x+"y="+rover_y);
        uploadbackground() ;
        uploadrover();
    }
}
