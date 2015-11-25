var clickOne = 0;
var clickTwo = 0;
var clickThree = 0;

$('#button-one').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-one').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-one').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-one').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-one').css('background-color', 'grey');
    clickOne = 0;
  }
  
 
});
//for buttonTwo

$('#button-two').click(function(){
  clickTwo += 1;
  if (clickTwo == 1){
    $('#button-two').css('background-color','yellow');
     console.log(clickTwo);
  }

  else if (clickTwo == 2){
    $('#button-two').css('background-color','green')
  
      console.log(clickTwo);
  }
  else if (clickTwo == 3){
    $('#button-two').css('background-color','red');

    console.log(clickTwo);
  }
  else if (clickTwo == 4){//reset button
    $('#button-two').css('background-color','grey');
   clickTwo = 0;
  }
});
// button Three

$('#button-three').click(function(){
  clickThree +=1;
  if (clickThree == 1){
    $('#button-three').css('background-color','yellow');
  
      console.log(clickThee);
  }
  else if (clickThree ==2){
    $('#button-three').css('background-color','green');
  
      console.log(clickThree);
  }
 else if (clickThree ==3){
  $('#button-three').css('background-color','red');

    console.log(clickThree);
 }
 else if (clickThree ==4){ // reset button
  $('#button-three').css('background-color','grey');
  clickThree = 0;
 } 
});

// this is for the second student


// this is the first button of the second student//

$('#button-Aone').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Aone').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Aone').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Aone').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-one').css('background-color', 'grey');
    clickOne = 0;
  }
  
 
});

// this for the second button of the second student//

$('#button-Atwo').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Atwo').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Atwo').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Atwo').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-Atwo').css('background-color', 'grey');
    clickOne = 0;
  }
   
});
// this is the third button for the second student//

$('#button-Athree').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Athree').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Athree').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Athree').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-Athree').css('background-color', 'grey');
    clickOne = 0;
  }   
});
// this is for the tird student
// the first click-button/*

$('#button-Bone').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Bone').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Bone').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Bone').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-Bone').css('background-color', 'grey');
    clickOne = 0;
  }
   
});
// this is the second button for the tird student//

$('#button-Btwo').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Btwo').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Btwo').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Btwo').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-Btwo').css('background-color', 'grey');
    clickOne = 0;
  }

});
// this is the third button for the the third student
// and the tird click-button/

$('#button-Bthree').click(function(){
   clickOne += 1;
  
  if (clickOne == 1){
    console.log(clickOne);
    $('#button-Bthree').css('background-color','yellow');
  }
  else if (clickOne == 2){
    console.log(clickOne);
      $('#button-Bthree').css('background-color','green');
  }
   else if (clickOne == 3){
    $('#button-Bthree').css('background-color', 'red');
    console.log(clickOne);
  } else if (clickOne == 4) { //reset the button 
     $('#button-Bthree').css('background-color', 'grey');
    clickOne = 0;
  }
   
});

// Click on main photo, show information

$('#img-id').click(function(){
  $('#text-id').toggleClass('show-text'); //create class in css with property:value = display: block;
});

// Show information based on student's participation
// 

