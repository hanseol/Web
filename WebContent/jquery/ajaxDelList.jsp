<%@page import="boardPkg.BoardDAO"%>
<%@page import="boardPkg.Board"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	String bno = request.getParameter("boardNo");
	
	int id = Integer.parseInt(bno);
	out.print(id);
	//BoardDAO dao = new BoardDAO();
	//dao.deleteBoard(id);

	

%>