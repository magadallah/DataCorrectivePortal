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
                                <img src="<c:url value="/resources/images/logo.png"/>" alt="">
                            </a>
                        </div>
                        <!-- /logo -->
                    </div>
                    <!-- main menu -->
                    <nav class="collapse navbar-collapse navbar-right" role="navigation">
                     <security:authorize access="hasAnyRole('ROLE_ADMIN')">
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
                            </ul>
                        </div>
                       </security:authorize>
                       
                       <security:authorize access="hasAnyRole('ROLE_USR')">
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
                               
                                
                                <li><a href="Logout">Logout</a></li>
                            </ul>
                        </div>
                       </security:authorize>
                       
                    </nav>
                    <!-- /main nav -->
                </div>
            </header>
            <!-- /main nav -->
        </div>
    </header>