<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html class="no-js">

<head>
    <!-- Basic Page Needs
        ================================================== -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="favicon.ico">
    <title>${param.pageTitle}</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <!-- Mobile Specific Metas
        ================================================== -->
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Template CSS Files
        ================================================== -->
    <!-- Twitter Bootstrs CSS -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/bootstrap/bootstrap.min.css" />">
    <!-- Ionicons Fonts Css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/ionicons/ionicons.min.css" />">
    <!-- animate css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/animate-css/animate.css" />">
    <!-- Hero area slider css-->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/slider/slider.css" />">
    <!-- owl craousel css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/owl-carousel/owl.carousel.css" />">
    <link rel="stylesheet" href="<c:url value="/resources/plugins/owl-carousel/owl.theme.css" />">
    <!-- Fancybox -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/facncybox/jquery.fancybox.css" />">
    <!-- template main css file -->
    <link rel="stylesheet" href="<c:url value="/resources/css/style.css" />">
   <style> 
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    left: 50%;
     margin-left: 55%;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}
.done_image
{
margin-left: 55%;
 content: "";
  clear: both;
  display: table;
}
.column {
  float: left;
  width: 34.33%;
  padding: 1px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
   </style> 
</head>

<body>

    <!--
        ==================================================
        Header Section Start
        ================================================== -->
   <!-- % include file = "header.jsp" %-->
   <h1>header</h1>
    <!--
==================================================
Slider Section Start
================================================== -->
<!-- 
<section id="hero-area">
<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="block wow fadeInUp" data-wow-delay=".3s">
              
                <section class="cd-intro">
                    <h1 class="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                    <span>Internet Banking Admin Portal</span><br>
                    <span class="cd-words-wrapper">
                        <b class="is-visible">Customer Satisfaction</b>
                        <b>INNOVATION</b>
                        <b>RELABILITY</b>
                    </span>
                    </h1>
                    </section> 
                   
                   
                </div>
            </div>
        </div>
    </div>
</section>
-->

 <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Internet Banking Admin Portal</h2>
                            <ol class="breadcrumb">
                               
                                <li class="active"> Update User name</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<!--
==================================================
About Section Start
================================================== -->
<section id="about">
    <div class="container">
        <!--div class="row">

        <h2 class="subtitle wow fadeInUp animated" data-wow-delay=".3s" data-wow-duration="500ms">Now Trending</h2>

            <div class="col-sm-3">
                <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                    <div class="img-wrapper">
                        <img src="images/portfolio/women_shoe3.png" class="img-responsive" alt="" >
                        <div class="overlay">
                            <div class="buttons">
                                <a rel="gallery" class="fancybox" href="images/portfolio/women_shoe3.png">Demo</a>        
                                <a target="_blank" href="">Details</a>
                            </div>
                        </div>
                    </div>
                    <figcaption>
                        <h4>
                            <a href="#">
                            </a>
                        </h4>
                      
                    </figcaption>
                </figure>
            </div-->

            <!--div class="col-md-6 col-sm-6"-->
            
                <div class="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                    <h1>
                    Update User name
                    </h1><br>
                   <div class="modal-body row">
                    <div class="row">
                <div class="col-md-4">

                    <div class="form-group">
    <label for="UserName">User LoginID:</label>
    <input type="text" class="form-control" id="UserName">
    <input type="hidden" class="form-control" id="UserName_copy">
</div>  
  <button type="button" class="btn btn-default" onclick = "ValidateUserName()">Validate</button>                
</div>
  
<div id="done_image" class="done_image" style="display:none">
<div class="column">
<label>Customer Updated</label>
</div>
<div class="column">
<img class="img-responsive" src="<c:url value="/resources/images/right.png" />"  height="42" width="42" alt="Chania">
</div>

</div>
 
  							<div class="col-md-4" id="Update_User_name" style="display:none">

                            <h2>User LoginID Details</h2>
                            <p>Check the status values below:</p>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>User LoginID</th>
                                        
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <input type="text" class="form-control" id="UserName_update"></td>
                                    </tr>                                  
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-default" onclick = "UpdateUserName()">Update</button>
                            
                            </div>
<div id="loader" style="display:none">
<div class="loader" ></div> 
</div>


</div>
</div>
                                        <!--p>
                        My name is Sonali Sagar and I am a 3rd year undergraduate student at the University of Toronto, pursuing a degree in Digital Enterprise Management. The benefit of this program is that a lot if it based on learning and understanding technologies that underlie digital businesses and managerial challenges and techniques. Since some classes are also taken at Sheridan college students in this program also receive a certificate in Digital Communications. I graduated from the American School of Dubai. 

                    </p>
                    <p>
                        Besides that I am also interested in learning about SAP, which is an ERP system and is used in a number of major companies. My hobbies include, playing Golf, and playing the guitar. 
                    </p-->
                </div>
                
            </div>
            <!--div class="col-md-6 col-sm-6">
                <div class="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
                    <img src="images/about/about.png" alt="">
                </div>
            </div-->
        </div>
    </div>
</section> <!-- /#about -->



            <!--
            ==================================================
            Footer Section Start
            ================================================== -->
            <%@ include file = "footer.jsp" %>
	<!-- Template Javascript Files
	================================================== -->
	<!-- jquery -->
	<script src="<c:url value="/resources/plugins/jQurey/jquery.min.js" />"></script>
	<!-- Form Validation -->
    <script src="<c:url value="/resources/plugins/form-validation/jquery.form.js" />"></script> 
    <script src="<c:url value="/resources/plugins/form-validation/jquery.validate.min.js" />"></script>
	<!-- owl carouserl js -->
	<script src="<c:url value="/resources/plugins/owl-carousel/owl.carousel.min.js" />"></script>
	<!-- bootstrap js -->
	<script src="<c:url value="/resources/plugins/bootstrap/bootstrap.min.js" />"></script>
	<!-- wow js -->
	<script src="<c:url value="/resources/plugins/wow-js/wow.min.js" />"></script>
	<!-- slider js -->
	<script src="<c:url value="/resources/plugins/slider/slider.js" />"></script>
	<!-- Fancybox -->
	<script src="<c:url value="/resources/plugins/facncybox/jquery.fancybox.js" />"></script>
	<!-- template main js -->
	<script src="<c:url value="/resources/js/main.js" />"></script>
	<!-- Actions Here -->
	<script type="text/javascript" src="<c:url value="/resources/js/Actions.js" />"></script>

    <!--script>
        function logIn(){
            FB.login(function(resonse){

                console.log(resonse);
            })
        }
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '373519953128577',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script-->
 	</body>
</html>