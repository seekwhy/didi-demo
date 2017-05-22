<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.baidu.ueditor.ActionEnter,com.xuebao.util.ConfigUtil"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	//String rootPath = application.getRealPath( "/" ); //当前服务(用于处理文件的上传)
	String rootPath = ConfigUtil.UPLOAD_FILE_PATH+ConfigUtil.UPLOAD_FILE_SERVER; //指定的其它服务(用于处理文件的上传)
	
	out.write( new ActionEnter( request, rootPath ).exec() );
	
%>