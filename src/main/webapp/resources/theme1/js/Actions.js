function ValidateUserName ()
{
	var Div = document.getElementById("Update_User_name");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	   document.getElementById("UserName_copy").value = document.getElementById("UserName").value
		//document.getElementById(id).disabled = true;
		var UserName = document.getElementById("UserName").value;	
	
	   if(UserName == null || UserName == "")
   			{
		   		alert("Please fill the field");
		   		return false;
   	
   			}
	
    	Div.style.display = "none";
    	Div_loader.style.display= "block";
    	Div_image.style.display= "none";
 
 
    
    
	 var xhttp = new XMLHttpRequest();
	 var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div.style.display = "block";
		    		   Div_loader.style.display= "none";
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("UserName_update").value=resultarray[0];
		    		
		    		   
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_loader.style.display= "none";
	    		   alert("No Customer Found With Login ID : " + UserName);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateUserName", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("UserName=" + UserName);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}

function UpdateUserName()
{
	
	var Div = document.getElementById("Update_User_name");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	
    	Div.style.display = "none";
    	Div_loader.style.display= "block";
	
    	 var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
	//document.getElementById(id).disabled = true;
	var UserName_update = document.getElementById("UserName_update").value;
	var UserName = document.getElementById("UserName_copy").value;
	
	 
	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Cann't Update Login ID : " + UserName);
	    		   }
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/UpdateUserName", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("UserName_update=" + UserName_update + "&UserName=" + UserName);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;



}

function DeactivateUserAccount()
{
	
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    
    valid(Account_Number);
    valid(Customer_number);
    Div.style.display= "none";
 	Div_image.style.display= "none";
	Div_loader.style.display= "block";
    
    
    if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
		{
   		alert("Please fill the fields");
   		return false;

		}

    
    
	
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeactivateUserAccount", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}



function ReactivateUserAccount()
{
	
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    valid(Account_Number);
    valid(Customer_number);
    Div.style.display= "none";
 	Div_image.style.display= "none";
	Div_loader.style.display= "block";
    
    
    if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
		{
   		alert("Please fill the fields");
   		return false;

		}

    
    
	
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Reactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Reactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReactivateUserAccount", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}

function ValidateCCReAct()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
   
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("No Credit Card Found For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCReAct", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}



function ValidateACCReAct()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    
    valid(Account_Number);
    valid(Customer_number);
    	
    	
    	 if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
 		{
    		alert("Please fill the fields");
    		return false;

 		}
 	    Div.style.display= "none";
 	 	Div_image.style.display= "none";
     	Div_loader.style.display= "block";
 	
 	
 	//document.getElementById(id).disabled = true;
    
     var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
     var resultarray = new Array();	
     	
 	 var xhttp = new XMLHttpRequest();
 	 var resultarray = new Array();
 	 xhttp.onreadystatechange = function() {
 		    if (xhttp.readyState == XMLHttpRequest.DONE) {
 		      
 		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
 		    		   {
 		    		   
 		    		   Div_loader.style.display= "none";
 		    		   Div_image.style.display= "none";		    		  
 		    		   resultarray = xhttp.responseText.split(",");
 		    		   document.getElementById("Visible").value=resultarray[0];
 		    		   document.getElementById("Is_Active").value=resultarray[1];
 		    		  
 		    		   Div.style.display= "block";
 		    		   }
 		    	   if( (xhttp.responseText == "Not Found"))
 	    		   {
 		    		   Div_image.style.display= "none";
 		    		   Div_loader.style.display= "none";
 	    		   alert("No Account Found For Account Number : " + Account_Number + " and Customer number : " + Customer_number);
 	    		   }
 		    	   
 		    	   if( (xhttp.responseText == "Error"))
 	    		   {
 		    		   Div_image.style.display= "none";
 		    		   Div_loader.style.display= "none";
 	    		   alert("An error occured please contact your support or try again later");
 	    		   }
 		    	   
 		    	 
 		       
 		    }
 		}
 	 
 	    xhttp.open("POST", URL + "/ValidateACCReAct", true);
 	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
 	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
    	
    	
    	
   
    
   
}


function valid(text)
{
debugger;
 var s = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
 str=text;
 for (var i = 0; i < str.length; i++)
 {
    if (s.indexOf(str.charAt(i)) != -1)
  {
     alert ("The box has special characters. \nThese are not allowed.\n");
    document.getElementById('<%=TextBox1.ClientID%>').value="";
     return false;
  }
}
}


function ValidateCCUpdate()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    
    
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("No Credit Card Found For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCReAct", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}


function ValidateCCUpdateSup()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("No Credit Card Found For Supplementary Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	 
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCUpdateSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}



function ReActivateCC()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    valid(sema_num);
    valid(gp_acc_num);
    
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Reactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReActivateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}


function DeActivateCC()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Deactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeActivateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}



function ReActivateCCSup()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    valid(sema_num);
    valid(gp_acc_num);
    
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Reactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReActivateCCSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}


function DeActivateCCSup()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Deactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeActivateCCSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}



function UpdateCC()
{
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Card Not Supplmentry For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/UpdateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;




}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function JoinT24()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var T24CustNo = document.getElementById("T24CustNo").value;
	var SemaNum = document.getElementById("SemaNum").value;
	
	document.getElementById("T24CustNo").value = "";
    document.getElementById("SemaNum").value ="";
    
    if(T24CustNo == null || T24CustNo == "" , SemaNum == null || SemaNum == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
  
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";		    		  
		    		
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Join T24 Number : " + T24CustNo + "with sema number : " + SemaNum);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/JoinT24", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("T24CustNo=" + T24CustNo + "&SemaNum=" + SemaNum);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}


