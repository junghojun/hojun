/**
 * create date : mon, october 6
 */

// basic table sample
var Jborder = (function(json_data, Element_id, URL) {
	var top = "<table border='1' id='header'>" + "<tr>" + "<td>NO</td>"
	+ "<td>title</td>" + "<td>content</td>" + "<td>date<td>"
	+ "<td>oder</td>" + "</tr>";

for (var int = 0; int < json_data.length; int++) {
top += "<tr id='data'>" + "<td>" + data.number + "</td>" + "<td>"
		+ data.title.substring(1, 20) + "</td>"
		"<td>" + data.content.substring(1, 30) + "<td>" + "<td>"
		+ data.date + "<td>" + "<td>" + data.oder + "</td>";

}
$(Element_id).append(top);
/*
 * this is border paging you can load this paging load for paging example :
 * beforeListElement : '<' moving to paging. nextListElement : '>' moving to
 * paging. view_number_count : showing first border page or more page you can
 * chooing page count total_record_count : this is very important, because input
 * total List and HashTable if you can use this paging, you can change this
 * paging, css or paging roule
 */ 

},Jpaging = (function(beforList,nextList,Element,view_number_count,total_record_count) {
	// temp values
	total_record_count = 200;
	view_number_count = 10;
	// //////////////////////////////////////
	
	total_record_count = parseInt(total_record_count);
	view_number_count = parseInt(view_number_count);
	var pageno = parseInt("1");
	var total_record = total_record_count;		   
	var page_per_record_cnt = 10;  
	var group_per_page_cnt =view_number_count;     
	var record_end_no = pageno*page_per_record_cnt;				
	var record_start_no = record_end_no-(page_per_record_cnt-1);
	if(record_end_no>total_record){
		record_end_no = total_record;
	}
	var limit_page = total_record % page_per_record_cnt>0 ? 1 : 0;
	var total_page = total_record / page_per_record_cnt + limit_page;
	if(pageno>total_page){
		pageno = total_page;
	}
	var page_group_avery = pageno%group_per_page_cnt>0 ? 1:0;
	var group_no = pageno/group_per_page_cnt+page_group_avery;
 
	
	var page_eno = group_no*group_per_page_cnt;		
	var page_eno_transform_change = group_per_page_cnt-1; 
	var page_sno = page_eno-page_eno_transform_change;	
 
	if(pageno<1){
		pageno = 1;
	}
	if(page_eno>total_page){
 
		page_eno=total_page;
 
	}
	
	var prev_pageno = page_sno-group_per_page_cnt;  
 
	var next_pageno = page_sno+group_per_page_cnt;	
	
	if(prev_pageno<1){
 
		prev_pageno=1;
 
	}
	if(next_pageno>total_page){
	
		next_pageno=total_page/group_per_page_cnt*group_per_page_cnt+1;
		
	}
	var page_eno_retransform = parseInt(page_eno);
	var page_sno_retransform = parseInt(page_sno);
	
	for (var int = page_sno_retransform-1; int < page_eno_retransform; int++) {
		$(Element).append("<a href='#?"+int+"' id='count_number'>"+"["+int+"]</a>");
			
		if(int<page_eno_retransform-1){ 
			$(Element).append(",");
			}
	}
	$(beforList).append("<a href='#?"+prev_pageno+"' id='count_number'>"+"[beforlist]</a>");
	$(nextList).append("<a href='#?"+next_pageno+"' id='count_number'>"+"[next]</a>");

}),Jcheck_value = (function(check_data) {

}), JWrite = (function(Write_URL,List_URL,data) {
	$.ajax({
		type:'POST',
		url : URL,
		dataType : 'json',
		data : data,
		async: true,
		cache: false,
		success : function(data) {
			//JReader_List(data); this is keep because I'll edite logic
			location.href=List_URL;
			
		}
	});
/*
 * this is showing to tail part.
 * 
 */
}),JReader_tail_List = (function(data) {

})/*,Jborder_List = (function(URL,data,border_List) {
	$.ajax({
		type:'POST',
		url : URL,
		dataType : 'json',
		data : data,
		async: true,
		cache: false,
		success : function(data) {
		$(border_List).html("<td>"+data.no+"</td>" +
				"<td>"+data.title+"</td>" +
						"<td>"+data.content.substring(0,20)+"</td>" +
								"<td>"+data.date+"</td>" +
										"<td>"+data.order+"</td>");
			
		}
	});
})*/,JEdite_content = (function(data) {

}),delete_content = (function(data) {

}), CRM_Reader = (function(data){
	
}));
