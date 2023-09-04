var count=0;
var step=0;

function input(id){
  let myid= document.getElementById(id);
  

  console.log(myid);

  count++;
  (count%2==0)?myid.classList.add("O"):myid.classList.add("X");

  checkwin(count);

}


function checkwin(step){

  

    let box1=document.getElementById("bx1").classList[1];
    let box2=document.getElementById("bx2").classList[1];
    let box3=document.getElementById("bx3").classList[1];
    let box4=document.getElementById("bx4").classList[1];
    let box5=document.getElementById("bx5").classList[1];
    let box6=document.getElementById("bx6").classList[1];
    let box7=document.getElementById("bx7").classList[1];
    let box8=document.getElementById("bx8").classList[1];
    let box9=document.getElementById("bx9").classList[1];

    console.log(box1,box2,box3,box4,box5,box6,box7,box8,box9);

    // ROWS WINNING CONDITIONS

 if(box1==='X' && box2==='X' && box3==='X' || box4==='X' && box5==='X' && box6==='X' || box7==='X' && box8==='X' && box9==='X'  ){
    document.getElementById("result").innerHTML="The Winner is X";
    congo();
    return 0;
 }else if(box1==='O' && box2==='O' && box3==='O' || box4==='O' && box5==='O' && box6==='O'|| box7==='O' && box8==='O' && box9==='O'){
    document.getElementById("result").innerHTML="The Winner is O";
    congo();
    return 0;
 }

   // COLUMN WINNING CONDITIONS

   if(box1==='X' && box4==='X' && box7==='X' || box2==='X' && box5==='X' && box8==='X' || box3==='X' && box6==='X' && box9==='X'  ){
    document.getElementById("result").innerHTML="The Winner is X";
    congo();
    return 0;
 }else if(box1==='O' && box4==='O' && box7==='O' || box2==='O' && box5==='O' && box8==='O'|| box3==='O' && box6==='O' && box9==='O'){
    document.getElementById("result").innerHTML="The Winner is O";
    congo();
    return 0;
 }

    // CROSS WINNING CONDITIONS

    if(box1==='X' && box5==='X' && box9==='X' || box3==='X' && box5==='X' && box7==='X'){
        document.getElementById("result").innerHTML="The Winner is X";
        congo();
        return 0;
        
     }else if(box1==='O' && box5==='O' && box9==='O' || box3==='O' && box5==='O' && box7==='O'){
        document.getElementById("result").innerHTML="The Winner is O";
        congo();
        return 0;
     }

     //TIE Condition
 
     if(step==9){
        document.getElementById("result").innerHTML="The game is tie";
  }

  function congo(){
   let span= document.getElementById("1");
   span.classList.add("animation");
  
}
  

}

function reset(){
    console.log("pressed reset");
    location.reload();
    count=0;

}






