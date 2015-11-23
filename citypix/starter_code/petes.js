$(document).ready(function(){
var arr = ['CATTS', 'HORSEE', 'LAM', 'CAMELS', 'POPPY'];
  for (i = 0; i < arr.length; i++){
  	$('#animals-type').append('<option>' + arr[i] + '</option>');
  }

  $('#animals-type').change(function(){
  	/*Act on the event*/
  	var animals = $('#animals-type').val();
  	
  	if(animls == 'CATTS'){
  		$('body').attr('class','catts');
  	}
  	else if(animals == 'HORSE'){
  		$('body').attr('class','horse');
  		}
  	else if(animals == 'LAM'){
  			$('body').attr('class','lam');
  		}
  	else if(animals == 'CAMELS'){
  			$('body').attr('class','camels');
  		}
  	else if(animals == 'poppy'){
  			$('body').attr('class','poppy');
  		}
  	}
  }); //.change
}); //doc.ready
