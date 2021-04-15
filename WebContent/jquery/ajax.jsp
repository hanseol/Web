<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page import="boardPkg.BoardDAO"%>
<%@page import="boardPkg.Board"%>


<% 
	String bno = request.getParameter("boardNo"); //ajax.html에서 넘겨주는 파라미터 이름과 일치 되어야 한다.
	String tit = request.getParameter("title");
	String con = request.getParameter("content");
	String wrt = request.getParameter("writer");
	
	int boardNo = Integer.parseInt(bno);
	
	Board board = new Board();
	BoardDAO dao = new BoardDAO();
	board.setBoardNo(boardNo);
	board.setTitle(tit);
	board.setContent(con);
	board.setWriter(wrt);
	
	Board retVal = new Board();
	retVal = dao.insertBoardResult(board);
	
	//json형식으로 만들기.
	String result = "{\"boardNo\":\""+retVal.getBoardNo()+"\"," 
		+ "\"title\":\""+retVal.getTitle()+"\"," 
		+ "\"content\":\""+retVal.getContent()+"\"," 
		+ "\"writer\":\""+retVal.getWriter()+"\","
		+ "\"creationDate\":\""+retVal.getCreationDate()+"\"}";
		
	out.print(result);
%>
