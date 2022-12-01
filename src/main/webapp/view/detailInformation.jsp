<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="kr.ac.capston.server.model.dto.DetailDto"%>
<%@page import="kr.ac.capston.server.management.ManagementRequest"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE HTML>
<html>
<head><title>관리자 페이지</title></head>
<body>

    <%
        ManagementRequest managementDto = (ManagementRequest) request.getAttribute("detail");
    %>
    <div>
        <수정>
        <form method="post" enctype="multipart/form-data">
        <label for="name">이름</label>
        <input type="text" name="name" id="name" value="<%=managementDto.getName()%>"/><br/>
        <label for="detailIntro">내용</label>
        <textarea  name="detailIntro" cols="50" rows="20"><%=managementDto.getDetailIntro()%></textarea><br/>
        <input type="submit" value="수정"/>
        </form>
    </div>
</body>
</html>