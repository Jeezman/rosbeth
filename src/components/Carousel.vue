<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner carousel-wrap" data-bs-interval="10000">
      <div class="carousel-item active carousel-image1">
        <!-- <img
          src="../images/slide-1.jpg"
          class="d-block w-100"
          alt="First Slide"
        /> -->
        <div class="card slides">
          <div class="card-body card-wrap">
            <h5 class="card-title">Rosbeth need a makeover?</h5>
            <p class="card-text">
              We specialise in websites for Primary, Secondary and Independent
              schools and those with 6th Forms
            </p>
            <a href="#" class="btn btn-outline-light">Get in touch</a>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-image2" data-bs-interval="10000">
        <!-- <img
          src="../images/slide-2.jpg"
          class="d-block w-100"
          alt="Second Slide"
        /> -->
        <div class="card slides">
          <div class="card-body card-wrap">
            <h5 class="card-title">Rosbeth need a makeover?</h5>
            <p class="card-text">
              We specialise in websites for Primary, Secondary and Independent
              schools and those with 6th Forms
            </p>
            <a href="#" class="btn btn-outline-ight">Get in touch</a>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-image3" data-bs-interval="10000">
        <!-- <img
          src="../images/slide-3.jpg"
          class="d-block w-100"
          alt="Third Slide"
        /> -->
        <div class="card slides">
          <div class="card-body card-wrap">
            <h5 class="card-title">Rosbeth need a makeover?</h5>
            <p class="card-text">
              We specialise in websites for Primary, Secondary and Independent
              schools and those with 6th Forms
            </p>
            <a href="#" class="btn btn-outline-light">Get in touch</a>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-image4" data-bs-interval="10000">
        <!-- <img
          src="../images/slide-4.jpg"
          class="d-block w-100"
          alt="Fourth Slide"
        /> -->
        <div class="card slides">
          <div class="card-body card-wrap">
            <h5 class="card-title">Rosbeth need a makeover?</h5>
            <p class="card-text">
              We specialise in websites for Primary, Secondary and Independent
              schools and those with 6th Forms
            </p>
            <a href="#" class="btn btn-outline-light">Get in touch</a>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-image5" data-bs-interval="10000">
        <!-- <img
          src="../images/slide-5.jpg"
          class="d-block w-100"
          alt="Fifth Slide"
        /> -->
        <div class="card slides">
          <div class="card-body card-wrap">
            <h5 class="card-title">Rosbeth need a makeover?</h5>
            <p class="card-text">
              We specialise in websites for Primary, Secondary and Independent
              schools and those with 6th Forms
            </p>
            <a href="#" class="btn btn-outline-light">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="box">
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.card-wrap {
  animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}
.box {
  padding: 100px;
}

@keyframes inner-left {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: none;
  }
}

.slides {
  padding: 30px;
  margin: 4%;

  /* display: inline-block; */

  border-radius: 0;
  white-space: normal;
  max-width: 35%;
  background: rgba(8, 9, 84, 0.43);
  color: #fff;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0.015em;
  line-height: 1.5em;
}
.carousel-image1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../images/slide-1.jpg");
  background-size: cover;
  padding: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}
.carousel-image2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../images/slide-2.jpg");
  background-size: cover;
  padding: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}
.carousel-image3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../images/slide-3.jpg");
  background-size: cover;
  padding: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}
.carousel-image4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../images/slide-4.jpg");
  background-size: cover;
  padding: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}
.carousel-image5 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../images/slide-5.jpg");
  background-size: cover;
  padding: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 480px) {
  .slides {
    margin: 1%;
    max-width: 75%;
  }
  .carousel-image1 {
    padding: 20px;
  }
  .carousel-image2 {
    padding: 20px;
  }
  .carousel-image3 {
    padding: 20px;
  }
  .carousel-image4 {
    padding: 20px;
  }
  .carousel-image5 {
    padding: 20px;
  }
}
</style>
