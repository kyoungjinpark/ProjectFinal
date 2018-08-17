<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="resources/css/index.css">
	<script src="resources/js/common.js"></script>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Title </title>
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
			    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">TOP</a>
			    <a href="#portfolio" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">MCU HISTORY</a>
			    <a href="#about" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">CHARACTERS STAT</a>
			    <a href="#contact" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Contact</a>
			  </div>
		</nav>
		 <span class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style="width:1em;right:0;padding:2 2;" onclick="openNav()"><i class="fa fa-bars" style="font-size: 0.5em"></i></span>
        <section>
            <div id="left">
            	<div id="Lframe">
            		<div><img src="resources/css/img/marvelbiglogo.png"></div>
            	</div>
            	<div>
            	
            	</div>
                
            </div>
            <div id="right">
                <div id="fi">right side story board 1</div>
                <div id="se">2</div>
                <div id="ti">3</div>
            </div>    
        </section>
	    

	</body>
</html>
