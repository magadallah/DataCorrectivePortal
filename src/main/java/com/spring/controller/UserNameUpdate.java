package com.spring.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;



@RestController
@SessionAttributes("LoginSession")
public class UserNameUpdate {

	private DBConnection conn  ;
	private Audit Logging  ;

	protected  Connection con = null; 
	
	static Logger log = Logger.getLogger(UserNameUpdate.class);
	//@ModelAttribute("LoginSession") LoginSession login 

		@RequestMapping(value = "/ValidateUserName" , method = RequestMethod.POST)
	   public String ValidateUserName (@RequestParam(value="UserName") String UserName , HttpServletRequest request ) {
		
			String Session = (String) request.getSession().getAttribute("SessionID");
			 String login_id = (String) request.getSession().getAttribute("username");
			// String req_id = (String) request.getSession().getAttribute("ReqID");
			 String result = "Not Found";
		
				 try
				 {
					 
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 
						 String query = "select userloginid , postname from bwuser where userloginid = '" + UserName + "'";
						 ResultSet rs = null ;
						 conn = new DBConnection ();
						 conn.OpenDBConnection();
						 Statement stmt = conn.con.createStatement();
						 rs = stmt.executeQuery(query);
						 while(rs.next())
						 {
							 
							 result = rs.getString("userloginid") + "," + rs.getString("userloginid");
						 }
						 
						 conn.CloseDBConn();
						 return result;
					 }
					 else
					 {
						 return result;
						 
					 }
					 
					
						
					
				 }
				
				 catch (Exception e)
				 {
					 result = "Error";
					 conn.CloseDBConn();
					 log.log(Level.ERROR , " (ValidateUserName) ::" + e.getMessage());
					 return result ;
					 
				 }
				
				
			
			
		    }		
		@RequestMapping(value = "/UpdateUserName" , method = RequestMethod.POST)
		   public String UpdateUserName (@RequestParam(value="UserName_update") String UserName_update , @RequestParam(value="UserName") String UserName , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
					 try
					 {
						 if(!Session.isEmpty() && !login_id.isEmpty())
						 {
							
							 PreparedStatement UpdateUserName = null;						
							 conn = new DBConnection ();
							 conn.OpenDBConnection();
							 UpdateUserName = conn.con.prepareStatement("update bwuser set userloginid = ? , postname = ? where userloginid = ?");
							 UpdateUserName.setString(1,UserName_update);
							 UpdateUserName.setString(2,UserName_update);
							 UpdateUserName.setString(3,UserName);
							 
							 int flag = UpdateUserName.executeUpdate();
							 if(flag>0)
						        {
								 Logging = new Audit();
								 Logging.AddLogging(login_id, "UPDATE USER-ID", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
								 result = "Done";
						        }
						              else
						        {
						            	  result = "No";

						        }
							 
							 
							
							 conn.CloseDBConn();
							 
							 return result;
							 
						 }
						 else
						 {
							 return result;
							 
						 }
						 
						 
						
							
						
					 }
					
					 catch (Exception e)
					 {
						 result = "Error";
						 conn.CloseDBConn();
						 log.log(Level.ERROR , " (UpdateUserName) ::" + e.getMessage());
						 return result ;
						 
					 }
					
					
				
				
			    }
		
	
}
