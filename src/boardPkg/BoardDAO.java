package boardPkg;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String sql = null;

	public void close() {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	// 전체 리스트 조회
	public Board[] selectBoards() {
		sql = "select * from board order by board_no asc";
		conn = DBCon.getConnection();
		Board[] boards = new Board[100];
		int i = 0;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Board brd = new Board();
				brd.setBoardNo(rs.getInt("board_no"));
				brd.setTitle(rs.getString("title"));
				brd.setContent(rs.getString("content"));
				brd.setWriter(rs.getString("writer"));
				brd.setCreationDate(rs.getString("creation_date"));

				boards[i++] = brd;
			}

		} catch (SQLException e) {
//			e.printStackTrace();
			System.out.println("조회처리 중 에러가 발생했습니다.");
		} finally {
			// 정상실행or예외발생 -> 항상 실행해야 할 내용이 있으면 구현.
			close();
		}
		return boards;
	}

	// 한건 조회
	public Board selectBoard(int boardNo) {
		sql = "select * from board where board_no = " + boardNo;
		conn = DBCon.getConnection();
		Board brd = null;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			if(rs.next()) {
				brd = new Board(rs.getInt("board_no"),rs.getString("title"),
									rs.getString("content"),rs.getString("writer"),
									rs.getString("creation_date"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return brd;
	}
	
	// 입력
	public void insertBoard(Board board) {
		conn = DBCon.getConnection();
		sql = "insert into board values(" 
				+ board.getBoardNo() 
				+ ", '" +board.getTitle() + "'"
				+ ", '" +board.getContent() + "'"
				+ ", '" +board.getWriter() + "'"
				+ ", sysdate"
				+ ")";
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "건 입력되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		
		
	}
	// 수정
	public void updateBoard(Board board) {
	
		conn = DBCon.getConnection();
		sql = "update board set content = '" + 
				board.getContent() + "' where board_no = "+ board.getBoardNo() ;
		
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "건 수정되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		
		
	}
	// 삭제
	public void deleteBoard(Board board) {
		conn = DBCon.getConnection();
		sql = "delete board where board_no = "+ board.getBoardNo() ;
		
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "건 삭제되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
	}
	
	// 전체 리스트 조회
		public List<Board> getBoardList() {
			sql = "select * from board order by board_no asc";
			conn = DBCon.getConnection();
			List<Board> boards = new ArrayList<>();
			try {
				stmt = conn.createStatement();
				rs = stmt.executeQuery(sql);
				while (rs.next()) {
					Board brd = new Board();
					brd.setBoardNo(rs.getInt("board_no"));
					brd.setTitle(rs.getString("title"));
					brd.setContent(rs.getString("content"));
					brd.setWriter(rs.getString("writer"));
					brd.setCreationDate(rs.getString("creation_date"));

					boards.add(brd);
				}

			} catch (SQLException e) {
//				e.printStackTrace();
				System.out.println("조회처리 중 에러가 발생했습니다.");
			} finally {
				// 정상실행or예외발생 -> 항상 실행해야 할 내용이 있으면 구현.
				close();
			}
			return boards;
		}
		
		// 입력
		public Board insertBoardResult(Board board) {
			conn = DBCon.getConnection();
			sql = "insert into board values(" 
					+ board.getBoardNo() 
					+ ", '" +board.getTitle() + "'"
					+ ", '" +board.getContent() + "'"
					+ ", '" +board.getWriter() + "'"
					+ ", sysdate"
					+ ")";
			
			String sql1 = "select * from board where board_no = " + board.getBoardNo();
			Board returnVal = new Board();
			try {
				stmt = conn.createStatement();
				int r = stmt.executeUpdate(sql);
				System.out.println(r + "건 입력되었습니다.");
				
				rs = stmt.executeQuery(sql1);
				if(rs.next()) {
					returnVal.setBoardNo(rs.getInt("board_no"));
					returnVal.setContent(rs.getString("content"));
					returnVal.setCreationDate(rs.getString("creation_date"));
					returnVal.setTitle(rs.getString("title"));
					returnVal.setWriter(rs.getString("writer"));
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				close();
			}
			return returnVal;
		}
		
		public void deleteBoard(int id) {
			conn = DBCon.getConnection();
			sql = "delete board where board_no = "+ id ;
			
			try {
				stmt = conn.createStatement();
				int r = stmt.executeUpdate(sql);
				System.out.println(r + "건 삭제되었습니다.");
			} catch (SQLException e) {
				e.printStackTrace();
			}finally {
				close();
			}
		}
}//end of class
