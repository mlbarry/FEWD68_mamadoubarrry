$(document).ready(function(){
var arr = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
  for (i = 0; i < arr.length; i++){
  	$('#city-type').append('<option>' + arr[i] + '</option>');
  }

  $('#city-type').change(function(){
  	/*Act on the event*/
  	var city = $('#city-type').val();
  	
  	if(city == 'NYC'){
  		$('body').attr('class','nyc');
  	}
  	else if(city == 'SF'){
  		$('body').attr('class','sf');
  		}
  	else if(city == 'LA'){
  			$('body').attr('class','la');
  		}
  	else if(city == 'ATX'){
  			$('body').attr('class','atx');
  		}
  	else if(city == 'SYD'){
  			$('body').attr('class','syd');
  		}
  	}
  }); //.change
}); //doc.ready
