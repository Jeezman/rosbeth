<template>
  <div class="container-fluid p-0">
    <div class="contact-hero-section">
      <h1>Contact us</h1>
    </div>
    <section class="contact-content-wrapper">
      <div class="contact-container">
        <section class="contact-section">
          <div class="contact-content-section">
            <section class="contact-features">
              <section class="contact-features-card-wrap">
                <aside class="contact-features-card">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#bc2a87"
                      class="bi bi-question-circle-fill contact-features-card-icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                      /></svg
                  ></span>
                  <div class="contact-features-card-content">
                    <h2 class="contact-features-title">Have a question?</h2>
                    <p class="contact-features-copy">
                      Checkout our FAQ section for tons of answers to some of
                      our most common customer questions. It is the fastest way
                      to get the answer you're looking for.
                    </p>
                    <a class="contact-link" href="/"
                      >Visit our Help Center<!-- -->
                      <span class="arrow-icon"
                        ><i class="bi bi-chevron-right"></i></span
                    ></a>
                  </div>
                </aside>
                <aside class="contact-features-card">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#070954"
                      class="bi bi-envelope-paper-fill contact-features-card-icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
                      /></svg
                  ></span>
                  <div class="contact-features-card-content">
                    <h2 class="contact-features-title">
                      Reach out to directly
                    </h2>
                    <p class="contact-features-copy">
                      Send us an email via
                      <a href="mailto:support@rosbeth.com"
                        >support@rosbeth.com</a
                      >
                      and ring our phone on<a href="tel:+234177777777"
                        >+234 177 777 777</a
                      >
                      and a representative will attend to you as soon as
                      possible
                    </p>
                    <a class="contact-link" href="/"
                      >Send an email<!-- -->
                      <span class="arrow-icon">
                        <i class="bi bi-chevron-right"></i> </span
                    ></a>
                  </div>
                </aside>
                <aside class="contact-features-card">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#bc2a87"
                      class="bi bi-geo-alt-fill contact-features-card-icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                      /></svg
                  ></span>
                  <div class="contact-features-card-content">
                    <h2 class="contact-features-title">Locate us</h2>
                    <p class="contact-features-copy">
                      With Rosbeth now available in over 200,000 locations
                      across Nigeria, our agents are always minutes away to
                      cater to your every financial need
                    </p>
                    <a class="contact-link" href="/"
                      >Find an agent near you<!-- -->
                      <span class="arrow-icon"
                        ><i class="bi bi-chevron-right"></i></span
                    ></a>
                  </div>
                </aside>
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
.contact-hero-section {
  background: #f5f9ff;

  color: #070954;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-content-wrapper {
  width: 100%;
  padding-top: 60px;
}
.contact-section {
  background-color: rgb(245, 249, 255);
  width: 100%;
  position: relative;
  letter-spacing: 0.03px !important;
}
.contact-section a {
  color: #bc2a87;
}
.contact-content-section {
  padding: 0px 105px 200px;
  position: relative;
  overflow: hidden;
  margin: 0px auto;
  max-width: 1440px;
}
.contact-features {
  display: flex;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 40px;
}
.contact-features-card-wrap {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.contact-features-card {
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 255, 0.1);
  border-right: 1px solid rgba(0, 0, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  border-radius: 24px;
  width: 34%;
  margin-right: 32px;
}
.contact-features-title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: rgb(26, 12, 47);
  margin-bottom: 16px;
  margin-top: 24px;
  text-align: left;
}
.contact-features-copy {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: rgb(26, 12, 47);
  opacity: 0.7;
  width: 100%;

  margin-bottom: 25px;
}
.contact-link {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  text-align: center;
  text-decoration: none;
  color: #bc2a87;
  margin: 0px 10px 0px 0px;
  -webkit-box-align: center;
  align-items: center;
}
.contact-features-card .contact-features-card-icon {
  height: 30px;
  width: 30px;
}
.arrow-icon {
  margin-left: 17px;
  margin-top: 5px;
}
@media screen and (max-width: 480px) {
  .contact-section {
    padding-left: 0;
    padding-right: 0;
  }
  .contact-content-section {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-features {
    padding-bottom: 0px;
    margin-top: 24px;
    width: 100%;
    padding-left: 10px;
  }
  .contact-features-card-wrap {
    border-radius: 10px;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px;
  }
  .contact-features-card {
    width: 100%;
    padding-left: 20px;
    padding-top: 28px;
    padding-bottom: 28px;
    border-right: none;
    flex-direction: row;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .contact-features-card .contact-features-card-content {
    margin-left: 10px;
  }
  .contact-features-title {
    font-size: 20px;
    margin-top: 0px;
  }
  .contact-features-copy {
    margin: 0px 0px 26px;
    width: 100%;
    font-size: 14px;
  }
}
</style>
