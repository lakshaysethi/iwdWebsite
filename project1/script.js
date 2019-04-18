window.onload=function myOnloadFunctionPart2(){
    
 
var part2Scene1 = document.getElementById("part2Scene1");
var part2Scene2 = document.getElementById("part2Scene2");
var part2Scene3 = document.getElementById("part2Scene3");
   var part2Scene4 =document.getElementById("part2Scene4");
    
    var vBottomBlack2= document.getElementById("bottomBlack2");


var slider = document.getElementById("windowSlider");
var vscene1window = document.getElementById("scene1window");

vscene1window.addEventListener("animationend",postAnimationScene1);
vBottomBlack2.addEventListener("animationend",postAnimationScene2);
part2Scene3.addEventListener("animationend",postAnimationScene3);
function postAnimationScene1(){
part2Scene1.style.display= "none";
}
function postAnimationScene2(){
part2Scene2.style.display= "none";
    part2Scene3.style.display="block";
}
 
function postAnimationScene3(){
part2Scene3.style.display= "none";
    part2Scene4.style.display="block";
    
}   
    
    // onclcik display scene1 and scene 2
    
    var reload= document.getElementById("reload");
    
    reload.onclick=reloadFunction;
    
    function reloadFunction(){
        part2Scene4.style.display="none";
        part2Scene1.style.display="block";
        part2Scene2.style.display="block";
    }

};
