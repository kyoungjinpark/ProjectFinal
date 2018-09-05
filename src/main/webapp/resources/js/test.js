$(document).ready(function(){
	    $("nav button").click(function() {
	    	var innerheight = window.innerHeight;
	    	if($(this).attr("data-target")=="#fir"){
	    		scrollPosition = {top:0};
	    	}else if($(this).attr("data-target")=="#sec"){
	    		scrollPosition = {top:innerheight};
	    	}else if($(this).attr("data-target")=="#thi"){
	    		scrollPosition = {top:innerheight*2};
	    	}else if($(this).attr("data-target")=="#fou"){
	    		scrollPosition = {top:innerheight*3};
	    	}else if($(this).attr("data-target")=="#fiv"){
	    		scrollPosition = {top:innerheight*4};
	    	}else{
	    		location.href="/index";
	    	};
	    	
		  $("#right").stop().animate({
		        scrollTop: scrollPosition.top
		  }, 1500);
		})
	
//	var step = function(){
		$(".btn1").on("click",function(){
			var index = $(this).index();
			console.log(index);
			$.ajax({type:"get",url:"/read",data:{"index":index, "uriIndex":"https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe"}})
			.done(function(data){
				//console.log(data.data);
				$("#test").empty();
				var key = data.data[0];
				$("#test").append("<h2>Marvel Cinematic Universe</h2>");
				$("#test").append(key);
			})
		
		
		})
		$(".btn2").on("click",function(){
			var index = $(this).index();
			console.log(index);
			$.ajax({type:"get",url:"/read",data:{"index":index, "uriIndex":"https://kin.naver.com/qna/detail.nhn?d1id=3&dirId=30306&docId=300640205&legendQnaPage=1"}})
			.done(function(data){
				//console.log(data.data);
				$("#test").empty();
				var key = data.data[0];
				$("#test").append("<h2>마블 지식인 성지글</h2>");
				$("#test").append("<p>"+key+"</p><p>출처: 네이버 지식인</p>");
				
			})
		
		
		})
		$(".btn6").on("click",function(){			
			$("#test").empty();
			$("#test").append("<div id='history'><img src='resources/css/img/Marvel-Movie-Timeline.png'></div>");
		})
		$(".btn7").on("click",function(){			
			$("#test").empty();
			$("#test").load("resources/prenoms.html", function(){
				test2();
			});
		})
		
		var cArr = [];
		var txt;
		var dataSource=[];
		var heroname="";
		var chart = null;
		var option = { chartType: 'LineChart',
				options: {hAxis: {title: 'Year/Month'}, vAxis: {title: 'Volum'}},
				containerId : 'history'};	
		/*$("#dataList").empty();
		$("#dataList").append("<button type='button' class='btn btn-danger'>캐릭터 리스트</button>");*/
		$("#dataList button").on("click",function(){
			var index = $(this).index();
			txt = $(this).text();				
			//cArr.push($(this));
			//console.log(index)
			//console.log(txt)
			$(".btn3").prop("disabled",false)
			$("#step2").show();
			//barData("25%")
//				})				
		})
		$(".btn3").off().on("click",function(){
			var index = $(this).index();
			var value = $(this).attr("value");
			cArr.push($(this));
			//console.log(index);					
			$.ajax({url:"/mrCall",type:"POST",data:{"inputString":value,"team":index}})
			.done(function(data){
				$("#step3").show();
				$("#test").empty();
				$("#test").append("<div style='text-align=center'><h3><img src='resources/css/img/giphy.gif' style='width:30%;'>Hadoop Distributed File System데이터 분석중</h3></div>");
				$("#file").text(data.name+"데이터 차트 준비 완료");
				//$(".btn4").prop("disabled",false);
				dataSource = data.data;
				//console.log(dataSource);
				heroname = data.name;
				getJson();
			})
		})					
		
		$(".btn4").off().on("click",function(){			
			$("#test").empty();
			$("#test").load("resources/prenoms.html", function(){
				test1();
			});
			$(".btn4").prop("disabled",true);
			$("#step2").css("display","none");
			/*$("#test").append("<div id='history'></div>");
					$("#history").css("width","100%")
					google.charts.load('current');
					google.charts.setOnLoadCallback(drawChart);*/
			//barData("75%")
			//$(".btn3").prop("disabled",false)
			//$(".btn4").prop("disabled",false)
			//$("#step4").show();			
		})				
		function getJson(){
			$(".btn4").attr("disabled","disabled");
			var obj = new Object();
			obj.forename = heroname;
			obj.sex = "m";
			var row = [];
			for(var i=0;i<dataSource.length;i++){                	
				$.each(dataSource[i],function(key,value){    					
					row[i] = value/10;
				})			
			};
			obj.births = (row);
			obj.forenameUnique = heroname;    			                
			obj.id = heroname;
			$.getJSON(forenamesUrl,function(data){
				var res = false;
				for(i = 0; i < data.length ; i ++){
					if(data[i].id == obj.id){
						console.log("있는 거");
						res = false;
						break;
					}else{
						res = true;
					}					
				}
				if(res == true){
					console.log("없으니까 추가");
					data.push(obj);
					console.log("제이슨에 저장할 데이터",data);
					jsonSave(data);
				}else{
					$("#test").empty();
					$("#test").append("<div class='alert alert-danger' style='text-align:center';><br><h1>"+heroname+"</h1><br>데이터 분석 완료<br></div>");
					$(".btn4").removeAttr("disabled");
				}
			});                
//                var obj_s = JSON.stringify(obj, null, "\t"); 
//                var dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(obj_s);
			
		}		
		
		function jsonSave(jsonObject) {		    
			var fileContents = JSON.stringify(jsonObject, null, 2);
			$.ajax({type:"post",url:"/getJson",data:{"jsonData": fileContents}})
			.done(function(){
				console.log("제이슨저장성공");
				setTimeout(function(){
					$("#test").empty();
					$("#test").append("<div class='alert alert-danger' style='text-align:center';><br><h1>"+heroname+"</h1><br>데이터 분석 완료<br></div>");
					$(".btn4").removeAttr("disabled");
				}, 6000);				
			});
		}	
		
		function drawChart() {
			var chartData = new google.visualization.DataTable();
			chartData.addColumn("string", 'X');
			chartData.addColumn("number", heroname);
			
			
			for(var i=0;i<dataSource.length;i++){
				var row = [];
				$.each(dataSource[i],function(key,value){
					row[0] = key;
					row[1] = Number(value);
				})			
				chartData.addRows([row]);
			}
			
			console.log(chartData);
			option.dataTable = chartData;
			chart = new google.visualization.ChartWrapper(option);
			chart.draw();
			$("#step5").show();
		}
		/*function wrapImgsave(){
			html2canvas(document.querySelector("#wrap")).then(function(canvas){
				console.log(canvas.toDataURL("image/png"));
				
				$.ajax({type:"post",url:"/getImg",data:{"imgData":canvas.toDataURL("image/png")}})
				.done(function(data){
					console.log(data);
				});
			});		
		}*/
		/*function barData(num){
			$("#bar_div").css("width",num);
			$("#bar_div").text(num);
		}*/
		/*function clear(){
			$("#step2").hide();
			$("#step3").hide();
			$("#step4").hide();
			$("#step5").hide();
			for(var i=0;i<cArr.length;i++){
				cArr[i].css("background-color","white");
			}
			cArr = [];
			txt;
			dataSource=[];
			heroname="";
			chart = null;
			barData("0%")
		}*/
		
//	}	
//	step();	
});

var forenamesUrl = "resources/forenames.json";
function test1(){
	console.log(forenamesUrl);
	$.getScript( "resources/js/application.js", function( data, textStatus, jqxhr ) {
//	  console.log( data ); // Data returned
//	  console.log( textStatus ); // Success
//	  console.log( jqxhr.status ); // 200
	  console.log( "Load was performed." );
	});
}
function test2(){
	forenamesUrl = "resources/forenames1.json";
	console.log(forenamesUrl);
	$.getScript( "resources/js/application.js", function( data, textStatus, jqxhr ) {
//	  console.log( data ); // Data returned
//	  console.log( textStatus ); // Success
//	  console.log( jqxhr.status ); // 200
	  console.log( "Load was performed." );
	});
}
function getYearMonth(value){
	var year = Math.floor(Math.round(value) / 12) + 2013;
	var month = Math.round(value) % 12;
	var yearMonth = "";
	
	if(year <= 2012){
		yearMonth = "201301";
	}else if(year >= 2019){
		yearMonth = "201807";
	}else {
		if(month === 0){
			//console.log("1");
			month = 12;
		}
		if(month < 10){
			month = "0" + month;
		}
		yearMonth = String(year)+"년"+ month+ "월";
	}
	
	return yearMonth;
}