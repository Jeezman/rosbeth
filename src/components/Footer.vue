<template>
  <footer class="text-white">
    <div class="container-fluid footer-wrap">
      <div class="row">
        <div class="col-6 col-md-3">
          <h2>Quick links</h2>
          <ul class="footer-column-wrap">
            <li><a href="#">Ethos, Vision & Values</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Ofsted</a></li>
            <li><a href="#">Collective Worship</a></li>
            <li><a href="#">Pupil / Sports Premium</a></li>
            <li><a href="#">Governance</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h3></h3>
          <ul class="footer-column-wrap padding-col">
            <li><a href="#">SATs/ Performance Tables</a></li>
            <li><a href="#">Uniform</a></li>
            <li><a href="#">School Day</a></li>
            <li><a href="#">SEND</a></li>
            <li><a href="#">School Clubs</a></li>
            <li><a href="#">Admissions</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h3></h3>
          <ul class="footer-column-wrap padding-col">
            <li><a href="#">News & Events</a></li>
            <li><a href="#"></a>Calendar</li>
            <li><a href="#"></a>Newsletters</li>
            <li><a href="#"></a>Letters Home</li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h3></h3>
          <ul class="footer-column-wrap padding-col">
            <li>
              <span><b>School contact:</b> Ruth </span>
            </li>
            <li><span>Sparkes</span></li>
            <li>
              <span><b>T:</b>01264 394090</span>
            </li>
            <li>
              <a href="mailto: hello@empra.co.uk">
                <b>E:</b>hello@empra.co.uk</a
              >
            </li>
            <li class="footer-social-icons">
              <i class="bi bi-twitter"></i>
              <i class="bi bi-envelope"></i>
            </li>
            <li>
              <a href="#" class="btn btn-outline-light button">Direction</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <h5>Designed by EMPRA</h5>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #60a216;
}
.footer-wrap {
  padding: 50px 100px;
}
footer ul,
a {
  text-decoration: none;
  list-style: none;
  color: #fff;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0.015em;
  line-height: 1.5em;
  padding-left: 0;
}
.footer-column-wrap {
  padding: 17px;
  padding-left: 0;
}
.padding-col {
  padding-top: 62px;
}
.footer-social-icons {
  margin-top: 20px;
  margin-bottom: 20px;
}
.footer-social-icons i {
  margin-right: 20px;
}
.button {
  border-radius: inherit;
  border: 2px solid #fff;
}

@media screen and (max-width: 480px) {
  .footer-wrap {
    padding: 40px 20px;
  }
}
</style>
