$(function(){
	var cArr = [];
	var txt;
	var dataSource=[];
	var heroname="";
	var chart = null;
    var option = { chartType: 'LineChart',
		    options: {hAxis: {title: 'Year/Month'}, vAxis: {title: 'Volum'}},
		    containerId : 'chart_body'};	
	var step1 = function(){
		$.ajax({type:"get",url:"/web/dir"})
		.done(function(data){
			console.log(data);
			$("#dataList").empty();
			
			for(var i=0;i<data.result.length;i++){
				for(var key in data.result[i]){
				$("#dataList").append("<li>"+key+"</li>");
				
				}
			}
			
			$("#dataList li").on("click",function(){
				var index = $(this).index();
				txt = $(this).text();				
				cArr.push($(this));
				$(this).css("background-color","yellow");
				console.log(index)
				console.log(txt)
				$("#step1 h5").text(txt);
				$(".btn1").prop("disabled",false)
				$("#step2").show();
				barData("25%")
			})
			
			$(".btn1").on("click",function(){
				var index = $(this).index();
				var value = $(this).attr("value");
				cArr.push($(this));
				$(this).css("background-color","yellow");
				/*console.log("씨어레이"+cArr);
				console.log(index);
				console.log(value);*/
				$.ajax({url:"/web/mrCall",type:"POST",data:{"inputString":value,"team":index}})
				.done(function(data){
					//console.log("데이터는"+data.data);
					$("#step3").show();
					//console.log("데이터속 주소는"+data.adr);
					$("#file").text("되나" + data.adr);
					$(".btn2").prop("disabled",false)
					dataSource = data.data;
					heroname = data.name
					barData("50%")
				})
			})

			$(".btn2").on("click",function(){
				$(".btn2").css("background-color","yellow")
				cArr.push($(this))
				  google.charts.load('current');
				  google.charts.setOnLoadCallback(drawChart);
				  barData("75%")
	  			  $(".btn3").prop("disabled",false)
	  			  $(".btn4").prop("disabled",false)
				  $("#step4").show();
			})
			
			$(".btn3").on("click",function(){
				barData("100%")
				wrapImgsave();
			})
			$(".btn4").on("click",function(){
				clear();
			})			
		})

	}
	step1()
	
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
	function wrapImgsave(){
		html2canvas(document.querySelector("#wrap")).then(function(canvas){
			console.log(canvas.toDataURL("image/png"));
			
			$.ajax({type:"post",url:"/web/getImg",data:{"imgData":canvas.toDataURL("image/png")}})
			.done(function(data){
				console.log(data);
			});
		});		
	}
	function barData(num){
		$("#bar_div").css("width",num);
		$("#bar_div").text(num);
	}
	function clear(){
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
	}
})

