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
  } else if (clickOne == 3){
    $('#button-one').css();
    
  } else if (clickOne == 4) { //reset the button 
     $('#button-one').css(grey);
    clickOne = 0;
  }
  
 
});

$('#button-two').click(function(){
  
});

$('#button-three').click(function(){
  
});

// Click on main photo, show information

$(#img-id).click(function(){
  $(#text-id).toggleClass('show-text'); //create class in css with property:value = display: block;
});

//

