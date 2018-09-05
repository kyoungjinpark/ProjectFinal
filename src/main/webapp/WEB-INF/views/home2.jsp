<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Welcome!</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="resources/css/common.css">
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="resources/js/common.js"></script>
</head>
<body>
	<div id="wrap">
		<h1>빅데이터 분석 결과 시각화</h1>
		<div id="step1">
			<h3>데이터 목록</h3>
			<ol id="dataList">
				
			</ol>
			<!-- <button type="button" value="team3" disabled="disabled" class="btn1">Test</button> -->
			<hr>
		</div>
		<div id="step2">
			<h3>분석 종류</h3>
			<!-- 버튼를 클릭 시 step1에서 선택한 파일를 MapReduce 처리 하기 -->
			<button type="button" value="team1" disabled="disabled" class="btn1">IronMan</button>
			<button type="button" value="team1" disabled="disabled" class="btn1">Hulk</button>
			<button type="button" value="team1" disabled="disabled" class="btn1">Thor</button>
			<button type="button" value="team1" disabled="disabled" class="btn1">HawkEye</button>
			<button type="button" value="team1" disabled="disabled" class="btn1">BlackWidow</button>
			<button type="button" value="team2" disabled="disabled" class="btn1">CaptainAmerica</button>
			<button type="button" value="team2" disabled="disabled" class="btn1">WinterSoldir</button>
			<button type="button" value="team2" disabled="disabled" class="btn1">StarLord</button>
			<button type="button" value="team2" disabled="disabled" class="btn1">Groot</button>
			<button type="button" value="team2" disabled="disabled" class="btn1">Thanos</button>
			<button type="button" value="team3" disabled="disabled" class="btn1">Antman</button>
			<button type="button" value="team3" disabled="disabled" class="btn1">DoctorStrange</button>
			<button type="button" value="team3" disabled="disabled" class="btn1">Spiderman</button>
			<button type="button" value="team3" disabled="disabled" class="btn1">BlackPanther</button>
			<button type="button" value="team3" disabled="disabled" class="btn1">DeadPool</button>
			
			
			<hr>
		</div>
		<div id="step3">
			<!-- 버튼를 클릭 시 step2에서 생성된 파일를 step4에 PieChart로 표현하기 -->
			<h3>분석 시작 <span id="file"></span></h3>
			<button type="button" disabled="disabled" class="btn2">진행</button>
			<hr>
		</div>
		<div id="step4">
			<h3>분석 결과</h3>
			<div id="chart_body">PieChart 영역</div>
			<hr>
		</div>
		<div id="step5">
			<!-- 프로젝트 "resources/upload/" 경로에 현재 시간 이름으로 이미지 저장 -->
			<button type="button" disabled="disabled" class="btn3">이미지 저장</button>
			<!-- 선택된 내용을 모두 초기화 하고 step1번 내용만 다시 보여주기 (step2 ~ step5는 화면 숨기기) -->
			<button type="button" disabled="disabled" class="btn4">초기화</button>
			<hr>
		</div>
		<h3>분석 진행률</h3>
		<div id="bar_body">
			<div id="bar_div" style="width:0%;">0%</div>
		</div>
	</div>
</body>
</html>

