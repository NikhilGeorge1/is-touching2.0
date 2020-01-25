var moving;
var fix;
var fix2
var fix3
function setup() {
  createCanvas(800,400);
 fix= createSprite(400, 200, 50, 50);
 moving=createSprite(200,10,200,15)
 fix3= createSprite(400, 22, 50, 50);
 fix2= createSprite(400, 279, 50, 50);

 moving.shapeColor="black"
}

function draw() {
  
  
  background("blue");  
  moving.x=mouseX
  moving.y=mouseY
   
 if (istouching(moving,fix)){
  moving.shapeColor="green"
  fix.shapeColor="yellow"


 }else{
 moving.shapeColor="red"


}
if (istouching(moving,fix2)){
  moving.shapeColor="green"
  fix2.shapeColor="yellow"


 }else{
 moving.shapeColor="red"



}
if (istouching(moving,fix3)){
  moving.shapeColor="green"
  fix3.shapeColor="yellow"


 }else{
 moving.shapeColor="red"


}
  
drawSprites();

}


function istouching(object1,object2){


  if(object1.x-object1.x<object1.width/2+object2.width/2
    &&fix.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
    return true  

    }else{
return false
    }
   
   
  }