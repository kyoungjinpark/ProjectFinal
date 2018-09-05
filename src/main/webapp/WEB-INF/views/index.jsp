<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<!-- <script src="resources/js/chart.js"></script> -->
	<script src="resources/js/test.js"></script>	
	<script src="resources/js/application.js"></script>
	<link rel="stylesheet" href="resources/css/index.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Marvel Fan Page </title>
	<!--부트스트랩-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<script type="text/javascript">
	function openNav() {
	    document.getElementById("mySidebar").style.width = "40%";
	    document.getElementById("mySidebar").style.display = "block";
	}

	function closeNav() {
	    document.getElementById("mySidebar").style.display = "none";
	}
	

	
	
	
	</script>
</head>

	<body>
        <nav class="w3-sidebar w3-black w3-animate-right w3-xxlarge" style="display:none;padding-top:150px;right:0;z-index:3" id="mySidebar">
		  		<a href="javascript:void(0)" onclick="closeNav()" class="w3-button w3-black w3-xxxlarge w3-display-topright" style="padding:0 8px;">
		  		  <i class="fa fa-remove" style="font-size: 0.5em"></i>
		  		</a>
	  			<div class="w3-bar-block w3-center">
	  			<button type="button" class="w3-bar-item w3-button w3-text-grey w3-hover-black" >HOME</button>
			    <button type="button" data-target="#fir" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">About MCU</button>
			    <button type="button" data-target="#sec" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">STAT Analysis</button>
			    <button type="button" data-target="#thi" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Movie Release Date</button>
			    <button type="button" data-target="#fou" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Total STAT</button>
			    <button type="button" data-target="#fiv" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Contact Us</button>
			  </div>
		</nav>
		 <span class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style="width:1em;right:0;padding:2 2;" onclick="openNav()"><i class="fa fa-bars" style="font-size: 0.5em"></i></span>
        <section>
            <div id="left">
            	<div id="Lframe">
            		<div><img src="resources/css/img/marvelbiglogo.png"></div>
            	</div>
            	<div id="middle">
            		<div id="test">
            		    <div>
            		        <div id="lhead">
            		           <div id="img"></div>
            		        </div>
            		        <div id="lbody">
                               <p style="font-size: 2em; color: black; text-align: center; opacity: 0.8">
            		            <br>Marvel Cinematic Univers 10th Anniversary Fan Page.<br>
            		            <br>You may have better understanding of Marvel movies and characters. 
            		            <br>Thank you for visiting. We hope you have MARVELous experience here.
            		            </p>
            		        </div>
            		        <div id="lfoot" style="font-size: 0.13em; color: white; padding: 0 30px">
            		            <br>This site is optimized for learning and enjoying Marvel Studio.<br> While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy.<br>
                                Copyright 2018 by Kyoungjin Park. All Rights Reserved.
            		        </div>
            		    </div>            		    
            		    
            		</div>
            	</div>
            	
                
            </div>
            <div id="right">
                <div id="fi" style="position: relative;">
                	<div id = "rbody1">
                	</div>
                	<div>
                		<div id="fir" style="padding-right: 20px; text-align: right; position:absolute; right: 0px;top:0px;">
        		        <h1 style="margin-top:30vh;">마블 스튜디오 10 주년</h1>
                		<p style="font-size: 1.3em;">MCU는 무엇이고, 마블은 무엇인가?</p> 
		                <button type="button" class="btn1 btn btn-danger">MCU from Wikipedia</button>
		     			<button type="button" class="btn2 btn btn-danger">Marvel from 지식인</button>              	
        		        </div>            	
                	</div>
                </div>
                <div id="se" style="position: relative;">
                	<div id = "rbody2"> 
                	</div>
                	<div>
                		<div id="sec" style="padding-left: 20px; text-align: left; position:absolute; right: 10vw;top:0px;">
                		<p style="margin-top:5vh; font-size: 2em;">
        		        <br>MCU 캐릭터<br>2013년 ~ 2018년 7월  
        		        <br>Google key word 검색 데이터 
        		        <div id="step1"> 
        		        <div id="dataList"><button type='button' class='btn btn-danger' style=width:25vw>캐릭터 리스트</button></div>
        		        </div>         		        
        		        </p> 
        		        <div id="step2">
        		        <p>분석 하려는 캐릭터를 선택!</p>
		                <button type="button" value="team1" disabled="disabled" class="btn3 btn btn-danger">IronMan</button>
						<button type="button" value="team1" disabled="disabled" class="btn3 btn btn-danger">Hulk</button>
						<button type="button" value="team1" disabled="disabled" class="btn3 btn btn-danger">Thor</button>
						<button type="button" value="team1" disabled="disabled" class="btn3 btn btn-danger">HawkEye</button>
						<button type="button" value="team1" disabled="disabled" class="btn3 btn btn-danger">BlackWidow</button>
						<button type="button" value="team2" disabled="disabled" class="btn3 btn btn-danger">CaptainAmerica</button>
						<button type="button" value="team2" disabled="disabled" class="btn3 btn btn-danger">WinterSoldier</button>
						<button type="button" value="team2" disabled="disabled" class="btn3 btn btn-danger">StarLord</button>
						<button type="button" value="team2" disabled="disabled" class="btn3 btn btn-danger">Groot</button>
						<button type="button" value="team2" disabled="disabled" class="btn3 btn btn-danger">Thanos</button>
						<button type="button" value="team3" disabled="disabled" class="btn3 btn btn-danger">Antman</button>
						<button type="button" value="team3" disabled="disabled" class="btn3 btn btn-danger">DoctorStrange</button>
						<button type="button" value="team3" disabled="disabled" class="btn3 btn btn-danger">Spiderman</button>
						<button type="button" value="team3" disabled="disabled" class="btn3 btn btn-danger">BlackPanther</button>
						<button type="button" value="team3" disabled="disabled" class="btn3 btn btn-danger">DeadPool</button>
			            </div> 	
			            <div id="step3">
								<h3><span id="file"></span></h3>
								<button type="button" disabled="disabled" class="btn4 btn btn-danger" style="width:25vw;">시각화 실행</button>								
							</div>
        		        </div>            	
                	</div>
                </div>
                <div id="th" style="position: relative;">
                	<div id = "rbody3"></div>
                	<div>
                		<div id= "thi" style="padding-right: 20px; text-align: left; position:absolute; right: 20vw; top:0px;">
                		<p style="margin-top:10vh;font-size: 1.3em;">
        		        <br>마블 영화를 즐기기 위한 Tip<br> MCU 개봉 순서
        		        </p> 
		                <button type="button" class="btn6 btn btn-danger" style=width:10vw>실행</button>		     			              	
        		        </div>            	
                	</div>
                </div>
                <div id="fo" style="position: relative;">
                	<div id = "rbody4"></div>
                	<div>
                		<div id= "fou" style="padding-right: 20px; text-align: right; position:absolute; right: 0px;top:50px;">
                		<p style="margin:0;font-size: 1.3em;">
        		        <br>핵심 MCU 캐릭터<br> 관심도 변화 분석
        		        </p> 
		                <button type="button" class="btn7 btn btn-danger">MCU 캐릭터 시각화 실행</button>		     			              	
        		        </div>            	
                	</div>
                </div>
                <div id="fi" style="position: relative;">
                	<div id = "rbody5"></div>
                	<div>
                		<div id= "fiv" style="position:absolute;; right:10%;top:30%;">
                		
						<div class="w3-col m5" style="width:30vw">
						    <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
						      <h3>Address</h3>
						      <p>Sanboncheon-ro 227beon-gil, Gunpo-si</p>
						      <p><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i> Gyeonggi-do, Republic of Korea</p>
						      <p><i class="fa fa-phone w3-text-teal w3-xlarge"></i>  +83 10 5148 1895</p>
						      <p><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  safebreaking@naver.com</p>
						</div>
						
						</div>
        		        </p> 
		                <!-- <button type="button" class="btn7 btn btn-danger">MCU 캐릭터 시각화 실행</button> -->		     			              	
        		        </div>            	
                	</div>
                </div>
            </div>    
        </section>
	    

	</body>
</html>
