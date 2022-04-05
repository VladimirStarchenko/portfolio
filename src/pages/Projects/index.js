import Footer from "../Footer";

function Project() {
  return (
    <>
      <section id="section3">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title text-center">
                <h2>Here are a few projects that I've worked on</h2>
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
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://glacial-cliffs-90348.herokuapp.com/">
                        <div className="post-abs">
                          <p>Mission:Possible</p>
                        </div>
                      </a>
                      <img src="img/projects/mission-possible.png" alt="" />
                    </div>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://vladimirstarchenko.github.io/Third-Party-API-Work-Day-Scheduler/">
                        <div className="post-abs">
                          <p>Work-Day Scheduler</p>
                        </div>
                      </a>
                      <img src="img/projects/scheduler.png" alt="" />
                    </div>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://vladimirstarchenko.github.io/Server-Side-API-Weather-Dashboard/">
                        <div className="post-abs">
                          <p>Weather Dashboard</p>
                        </div>
                      </a>
                      <img src="img/projects/weather.png" alt="" />
                    </div>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <a href="https://github.com/VladimirStarchenko/techzette">
                        <div className="post-abs">
                          <p>Techzette</p>
                        </div>
                      </a>
                      <img src="img/projects/techzette.png" alt="" />
                    </div>
                  </div>
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
