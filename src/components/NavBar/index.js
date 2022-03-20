function NavBar({ setCurrentPage }) {
  return (
    <>
      <header className="top">
        <div className="fixedArea">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 noPadding">
              <div className="content-wrapper one">
                {/* <!-- Main Menu Start -->
                                <!-- Navbar--> */}
                <header className="header">
                  <nav className="navbar navbar-default myNavBar">
                    <div className="container">
                      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                      <div className="navbar-header">
                        <div className="row">
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <div className="row">
                              <div className="col-md-3 col-xs-3 col-sm-3">
                                <a
                                  style={{ paddingTop: "0px" }}
                                  className="navbar-brand navBrandText text-uppercase font-weight-bold"
                                  href="index.html"
                                >
                                  <img
                                    src="img/logo/logo.png"
                                    height="50px"
                                    alt="restorant"
                                  />
                                </a>
                              </div>
                              <div className="name col-md-9 col-sm-9 col-xs-9">
                                <h1>Vladimir Starchenko</h1>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-3 col-xs-3">
                            <button
                              type="button"
                              className="navbar-toggle collapsed"
                              data-toggle="collapse"
                              data-target="#bs-example-navbar-collapse-1"
                              aria-expanded="false"
                            >
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                      <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                      >
                        <ul className="nav navbar-nav navbar-right navBar">
                          <li className="nav-item">
                            <a
                              onClick={() => setCurrentPage("Home")}
                              href="#section0"
                              className="nav-link text-uppercase font-weight-bold js-scroll-trigger"
                            >
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              onClick={() => setCurrentPage("About")}
                              href="#section2"
                              className="nav-link text-uppercase font-weight-bold js-scroll-trigger"
                            >
                              About
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              onClick={() => setCurrentPage("Project")}
                              href="#section3"
                              className="nav-link text-uppercase font-weight-bold js-scroll-trigger"
                            >
                              Projects
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              onClick={() => setCurrentPage("Contact")}
                              href="#section6"
                              className="nav-link text-uppercase font-weight-bold js-scroll-trigger"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </header>
                {/* <!-- Main Menu End --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
