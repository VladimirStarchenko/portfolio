import Footer from "../Footer";

function Project() {
  return (
    <>
      <section id="section3">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title text-center">
                <h3>Here are a few projects that I've worked on</h3>
                <h2>Cemre Bakery Fresh Cakes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-12 noPadding">
                <div
                  id="news-slider"
                  className="news-slider owl-theme owl-carousel"
                >
                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://vladimirstarchenko.github.io/run-buddy">
                        <div className="post-abs">
                          <p>Run Buddy</p>
                        </div>
                      </a>
                      <img src="img/projects/RunBuddy.png" alt="" />
                    </div>
                    {/* <h3 className="post-title">
                      <a href="#">Progresso İtalian Style</a>
                    </h3>
                    <p className="post-description">12$</p> */}
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://bike-haven.herokuapp.com/">
                        <div className="post-abs">
                          <p>Bike Haven</p>
                        </div>
                      </a>

                      <img src="img/projects/bikeHaven.png" alt="" />
                    </div>
                    {/* <h3 className="post-title">
                      <a href="#">Progresso İtalian Style</a>
                    </h3>
                    <p className="post-description">12$</p> */}
                  </div>

                  {/* <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs">
                        <p>Progresso İtalian Style</p>
                      </div>
                      <img src="img/projects/productnew.png" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Progresso İtalian Style</a>
                    </h3>
                    <p className="post-description">12$</p>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs">
                        <p>Progresso İtalian Style</p>
                      </div>
                      <img src="img/projects/productnew.png" alt="" />
                    </div>
                    <h3 className="post-title">
                      <a href="#">Progresso İtalian Style</a>
                    </h3>
                    <p className="post-description">12$</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact100-form-title container">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Project;
