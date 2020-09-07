<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class="no-js">

<head>
    <!-- Basic Page Needs
        ================================================== -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="favicon.ico">
    <title>CR2 Admin</title>
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
    
    <link rel="stylesheet" href="<c:url value="/resources/css/jquery-ui.css"/>">
    
    
    	<script src="<c:url value="/resources/js/jquery-1.12.4.js" />"></script>
    <script src="<c:url value="/resources/js/jquery-ui.js"/>"></script>
    
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
    
    
      <script type="text/javascript">
  $( function() {
    $( "#datepicker_from" ).datepicker();
  } );
  
  $( function() {
    $( "#datepicker_to" ).datepicker();
  } );
  
  
  
   $(document).ready(function() {
      $("#datepicker_from").on('keydown paste', function(e){
        e.preventDefault();
    });
     
} );
   $(document).ready(function() {
      $("#datepicker_to").on('keydown paste', function(e){
        e.preventDefault();
    });
    
   document.getElementById("Submit_btn").addEventListener("click", function(event){
   
   
   var DateFrom = new Date(document.getElementById("datepicker_from").value) ;
	var DateTo = new Date(document.getElementById("datepicker_to").value) ;
	if ( DateFrom != "" || DateTo != "")
		{
			if( DateFrom > DateTo)
				{
				 event.preventDefault()
				alert ('Date From must be before Date To');
				
				}
			
		
		}
   
				   
				});
				} );
 
  </script>
    
</head>

<body>

    <!--
        ==================================================
        Header Section Start
        ================================================== -->
    <header id="top-bar" class="navbar-fixed-top animated-header">
        <div class="container">
            <div class="navbar-header">
                <!-- responsive nav button -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- /responsive nav button -->

                <!-- logo -->
                <div class="navbar-brand">
                    <a href="home">
                        <img src="<c:url value="/resources/images/logo.png"/>" alt="">
                    </a>
                </div>
                <!-- /logo -->
            </div>
            <!-- main menu -->
            <header id="top-bar" class="navbar-fixed-top animated-header">
                <div class="container">
                    <div class="navbar-header">
                        <!-- responsive nav button -->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- /responsive nav button -->

                        <!-- logo -->
                        <div class="navbar-brand">
                            <a href="home">
                                <img src="<c:url value="/resources/images/logo.png" />" alt="">
                            </a>
                        </div>
                        <!-- /logo -->
                    </div>
                    <!-- main menu -->
                    <nav class="collapse navbar-collapse navbar-right" role="navigation">
                        <div class="main-menu">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="home">Update User-ID</a>
                                </li>
                                <!--li><a href="about.html">About</a></li-->
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<span class="caret"></span></a>
                                    <div class="dropdown-menu">
                                        <ul>
                                            <li><a href="Accamend">Accounts / Loan</a></li>
                                            <li><a href="ccreactive">Credit Card Re-Activate - Deactivate</a></li>
                                            <li><a href="ccamend">Supplementary Credit Card Amend</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="JoinT24">Join Cust no / Sema</a></li>
                                 <li><a href="Reports">Reports</a></li>
                                <li><a href="Logout">Logout</a></li>
                                <!--li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                    </ul>
                                </div>
                            </li-->
                                <!--li><a href="blog-fullwidth.html">My Cart</a></li>
                            <!--li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <span class="caret"></span></a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li><a href="blog-fullwidth.html">Blog Full</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right sidebar</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="location.html">Directions</a></li-->
                            </ul>
                        </div>
                    </nav>
                    <!-- /main nav -->
                </div>
            </header>
            <!-- /main nav -->
        </div>
    </header>
    <!--
        ================================================== 
            Global Page Section Start
        ================================================== -->
        <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Reports</h2>
                            <ol class="breadcrumb">
                                <li>
                                    <a href="home">
                                        <i class="ion-ios-home"></i>
                                        Home
                                    </a>
                                </li>
                                <li class="active">Reports</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>


<!-- 
================================================== 
    Company Description Section Start
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
                   
                    <div class="modal-body row">
                    <div class="row">
                <div class="col-md-4">
		  <form action = "ExportCSV" method = "post">
                    <div class="form-group">
                  
  <label for="usr">User Name:</label>
  <input type="text" class="form-control" id="User_Name" name="User_Name">
</div>
<div class="form-group">
  <label for="usr">Date From:</label>
  <input type="text" class="form-control" id="datepicker_from" name="datepicker_from" required>
</div>

<div class="form-group">
  <label for="usr">Date To:</label>
  <input type="text" class="form-control" id="datepicker_to" name="datepicker_to" required>
</div>
  
 
  <button type="submit" class="btn btn-default" id="Submit_btn">Exctract to CSV</button>
          </form>       
  </div>
  
  <div id="done_image" class="done_image" style="display:none">
<div class="column">
<label>Customer Deactivated</label>
</div>
<div class="column">
<img class="img-responsive" src="<c:url value="/resources/images/right.png" />"  height="42" width="42" alt="Chania">
</div>
  <!--div class="row"-->
                
</div>
</div>
<div id="loader" style="display:none">
<div class="loader" ></div> 
</div>
</div>

                </div>
                
            </div>
            
        </div>
    </div>
</section>


<!-- 
================================================== 
    Company Feature Section Start
================================================== -->



<!-- 
================================================== 
    Team Section Start
================================================== -->


        <!-- 
        ================================================== 
            Clients Section Start
        ================================================== -->
        





            <!--
            ==================================================
            Call To Action Section Start
            ================================================== -->
             

            <!--
            ==================================================
            Footer Section Start
            ================================================== -->
             <footer id="footer">
                <div class="container">
                    <div class="col-md-8">
                        <p class="copyright">Copyright: <span><script>document.write(new Date().getFullYear())</script></span> Design and Developed by <a href="#" target="_blank">Digital and Devlopment team</a>. <br> 
                            
                        </p>
                    </div>
                    <div class="col-md-4">
                        <!-- Social Media -->
                        
                </div>
            </footer> <!-- /#footer -->

	<!-- Template Javascript Files
	================================================== -->
<!-- ================================================== --> 

	<!-- jquery -->
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
 	</body>
</html>