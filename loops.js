function forLoop(){
  for(let i=0; i<25; i++){
    if (i===1) { 
      console.log("I am 1 strange loop.")
  } else {
    console.log ("I am ${i} strange loops.")
  }
  }
  }
  

function whileLoop(){
  let countdown=20;
  while(countdown>=0){
    console.log(countdown--);
    return 'done'
  }
}

function doWhileLoop(array){
  var i=0
  function incrementVariable() {
  i = i + 1;
}
do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i.length > 0 && incrementVariable());
  
}