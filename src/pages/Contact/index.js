import Footer from "../Footer";

function Contact() {
  return (
    <>
      <section id="section6" className="contact">
        <div className="contact100-form-title container">
          <h3>Need to reach me?</h3>
          <h2>Send A Message</h2>
          <form className="contact100-form validate-form">
            <div
              className="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span className="label-input100">Your Name</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="label-input100">Email</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Enter your email addess"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span className="label-input100">Message</span>
              <textarea
                className="input100"
                name="message"
                placeholder="Your message here..."
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <span>
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>

            <div
              className="container-contact100-form-btn response"
              style={{ marginTop: "30px" }}
            >
              <p className="error"></p>
            </div>
          </form>

          <Footer />
        </div>
      </section>
    </>
  );
}

export default Contact;
