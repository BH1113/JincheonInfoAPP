<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="kr.ac.capston.server.model.dto.DetailDto"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE HTML>
<html>
<head><title>관리자 페이지</title></head>
<body>

    <%
        List<DetailDto> details = (List<DetailDto>) request.getAttribute("details");
    %>
    <div>
        <b>문화재 이름</b>
            <%
                for(int i = 0; i < details.size(); i++){%>
                    <a href="capServer/management?<%=details.get(i).getName()%>"><%=details.get(i).getName()%></a><br/>
            <%}%>
    </div>
    <div>
        <추가>
        <form:form method="post" enctype="multipart/form-data">
        <label for="name">이름</label>
        <input type="text" name="name" id="name"/>
        <form:errors path="name"/><br/>
        <label for="detailIntro">내용</label>
        <input type="text" name="detailIntro" id="detailIntro"/>
        <form:errors path="detailIntro"/><br/>
        <label for="cor_x">x 좌표</label>
        <input type="number" name="cor_x" id="cor_x"/><br/>
        <label for="cor_y">y 좌표</label>
        <input type="number" name="cor_y" id="cor_y"/><br/>
        <input type="submit" value="새로운 파일 등록"/>
        </form>
    </div>
</body>
</html>