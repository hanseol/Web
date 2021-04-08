<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String name= request.getParameter("name");
		String sex= request.getParameter("sex");
		String year= request.getParameter("year");
		String[] subjects = request.getParameterValues("subjects");
		String[] hobbies = request.getParameterValues("hobby");
	%>
	<h3><%=name %></h3>
	<h3><%=sex %></h3>
	<h3><%=year %></h3>
	<%
		for(String sbj : subjects){
	%>		
			<ul>
			<li>subject:<%=sbj%><br></li>
			</ul>
	<%
		}
	
		for(String hobby : hobbies){
	%>
			<ul>
			<li>
			hobby:<%=hobby%><br></li>
			</ul>
	<%
		}
	%>
	
</body>
</html>