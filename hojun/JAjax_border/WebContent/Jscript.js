/**
 *  create date : mon, october 6
 */

	//basic table sample
	var Create_Jborder =(function(json_data,Element_id){
		
		var top="<table border='1' id='header'>" +
				"<tr>" +
				"<td>NO</td>" +
				"<td>title</td>" +
				"<td>content</td>" +
				"<td>date<td>" +
				"<td>oder</td>" +
				"</tr>";
			
		
		for (var int = 0; int < json_data.length; int++) {
			top+="<tr>" +
					"<td>"+request_data.number+"</td>" +
					"<td>"+request_data.title.substring(1,20)+"</td>"
					"<td>"+request_data.content.substring(1,30)+"<td>" +
					"<td>"+request_data.date+"<td>" +
					"<td>"+request_data.oder+"</td>";
		}
		$( Element_id ).append(top);
	
		
	});
	//Do AJAX request and let it respond within a second
	var request_data = function(){
		var ajax = $.ajax({
	        url: URL,
	        dataType : 'json'
	        ,data: {
	            'sleep': 0
	        },
	        success: function(data){
	            return data;
	        }
	    });
	};
	
	//basic Jpaging
	var Jpaging = (function(count_data,Elementid){
		
	});
	var Jcheck_value = (function(check_data){
		
	});
	var JWrite = (function(write_data){
		
	});
	var JReader_List = (function(){
		
	});
	var JEdite_content = (function(data){
		
	});
	var delete_content = (function(data){
		
	});
	
	

