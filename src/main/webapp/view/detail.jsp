<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="kr.ac.capston.server.model.dto.DetailDto"%>
<!DOCTYPE HTML>
<html>
	<body>
	    <% DetailDto detailDto = (DetailDto) request.getAttribute("detailData");%>
	    <image src="/image/<%=detailDto.getDetailImage()%>.jpg"/>
	    <p><%=detailDto.getDetailIntro()%></p>
	</body>
</html>