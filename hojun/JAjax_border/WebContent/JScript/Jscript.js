/**
 *  create date : mon, october 6
 */
(function(){
	//basic table sample
	var Create_Jborder =(function(json_data,Element_id){
		
		var top="<table>" +
				"<tr>" +
				"<td>NO</td>" +
				"<td>title</td>" +
				"<td>content</td>" +
				"<td>date<td>" +
				"<td>oder</td>" +
				"</tr>";
		$(Element_id).appendTo(top);
		for (var int = 0; int < json_data.length; int++) {
			top=+"<tr>" +
					"<td>"+json_data.number+"</td>" +
					"<td>"+json_data.title.substring(1,20)+"</td>"
					"<td>"+json_data.content.substring(1,30)+"<td>" +
					"<td>"+json_data.date+"<td>" +
					"<td>"+json_data.oder+"</td>";
		}
		
		
	});
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
	
	
	
	
})
